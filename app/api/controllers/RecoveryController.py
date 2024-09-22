from app.api.models.UserModel import User
from app.dbSetup import SessionLocal
import random
import string
from app.api.services.EmailService import EmailService


class RecoveryController:
	@staticmethod
	def recovery(email: str):
		session = SessionLocal()
		try:
			user = session.query(User).filter_by(email=email).first()
			if user is None:
				return {'message': 'Usuário não encontrado'}, 404
			
			characters = string.ascii_letters + string.digits
			random_password = ''.join(random.choice(characters) for _ in range(8))
			
			user.recovery = random_password
			
			session.commit()
			session.close()
			
			custom_message = f"Use esta senha reserva para logar: {random_password}"
			EmailService.send_email(email, 'Crypto Signal Robot - Senha reserva', custom_message)
			
			return {'message': 'Recuperação com sucesso'}, 200
		
		except Exception as e:
			session.rollback()  # Roll back the session in case of error
			return {'message': str(e)}, 500
		finally:
			session.close()


