import sys

from sqlalchemy import desc

from app.BTCHistory import BTCHistory
from app.api.services.CryptoService import CryptoService
from app.dbSetup import SessionLocal


class RobotController:
    @staticmethod
    def get_signal():
        session = SessionLocal()
        oldest_entry = session.query(BTCHistory).order_by(BTCHistory.btc_date).first()
        newest_entry = session.query(BTCHistory).order_by(desc(BTCHistory.btc_date)).first()
        
        print("Oldest Entry:", oldest_entry, file=sys.stderr)
        print("Newest Entry:", newest_entry, file=sys.stderr)
        
        oldest_value = oldest_entry.btc_value if oldest_entry else None
        oldest_data = oldest_entry.btc_date if oldest_entry else None
        newest_value = newest_entry.btc_value if newest_entry else None
        
        formatted_date_str = oldest_data.strftime("%d/%m/%y")
        
        if oldest_value is None or newest_value is None:
            return {'message': 'No important data'}, 400
        if CryptoService.parse_currency(oldest_value) > CryptoService.parse_currency(newest_value):
            message = f"Compra: BTC está melhor hoje comparado ao dia {formatted_date_str}"
            return {'message': message}, 200
        message = f"Venda: BTC está melhor hoje comparado ao dia {formatted_date_str}"
        return {'message': message}, 200




