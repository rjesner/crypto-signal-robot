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

        if CryptoService.parse_currency(oldest_value) > CryptoService.parse_currency(newest_value):
            message = f"BTC is cheap today compared to {oldest_data}"
            return {'message': message}, 200

        return {'message': 'No important data'}, 400


