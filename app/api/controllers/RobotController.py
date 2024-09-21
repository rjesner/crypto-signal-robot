from sqlalchemy import desc
from app.BTCHistory import BTCHistory
from app.api.models.UserModel import User
from app.api.models.MessageModel import Message
from app.api.services.CryptoService import CryptoService
from app.dbSetup import SessionLocal
import sys


class RobotController:
    @staticmethod
    def get_signal(email: str):
        session = SessionLocal()
        try:
            user = session.query(User).filter_by(email=email).first()
            if user is None:
                return {'message': 'Usuário não encontrado'}, 404
            
            oldest_entry = session.query(BTCHistory).order_by(BTCHistory.btc_date).first()
            newest_entry = session.query(BTCHistory).order_by(desc(BTCHistory.btc_date)).first()
            
            print("Oldest Entry:", oldest_entry, file=sys.stderr)
            print("Newest Entry:", newest_entry, file=sys.stderr)
            
            oldest_value = oldest_entry.btc_value if oldest_entry else None
            oldest_data = oldest_entry.btc_date if oldest_entry else None
            newest_value = newest_entry.btc_value if newest_entry else None
            
            formatted_date_str = oldest_data.strftime("%d/%m/%y") if oldest_data else ""
            
            if oldest_value is None or newest_value is None:
                return {'message': 'Nenhum dado relevante'}, 400
            
            if CryptoService.parse_currency(oldest_value) > CryptoService.parse_currency(newest_value):
                message = f"Compra: BTC está melhor hoje comparado ao dia {formatted_date_str}"
            else:
                message = f"Venda: BTC está melhor hoje comparado ao dia {formatted_date_str}"
            
            new_message = Message(user_id=user.id, message=message)
            session.add(new_message)
            session.commit()
            
            return {'message': message}, 200
        
        except Exception as e:
            session.rollback()  # Roll back the session in case of error
            return {'message': str(e)}, 500
        finally:
            session.close()
