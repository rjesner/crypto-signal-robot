from datetime import datetime
import sys

from app.api.models.UserModel import User
from app.api.models.MessageModel import Message
from app.dbSetup import SessionLocal


class ChatController:
	@staticmethod
	def get_signal(email: str):
		session = SessionLocal()
		try:
			user = session.query(User).filter_by(email=email).first()
			if user is None:
				return {'message': 'User not found'}, 404
			
			# Fetch all messages for the user
			user_messages = session.query(Message).filter_by(user_id=user.id).all()
			message_history = '|'.join([
				f"{msg.message}|{msg.created_at.strftime('%d/%m/%y')}" for msg in user_messages
			])
			
			return {'message': message_history}, 200
		
		except Exception as e:
			session.rollback()  # Roll back the session in case of error
			return {'message': str(e)}, 500
		finally:
			session.close()