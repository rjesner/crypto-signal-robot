from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()


class BTCHistory(Base):
    __tablename__ = 'btc_history'

    id = Column(Integer, primary_key=True, autoincrement=True)
    btc_value = Column(String(50))
    btc_date = Column(String(50))

    def __repr__(self):
        return (f"<BTCHistory(id={self.id}, btc_value={self.btc_value}, "
                f"btc_date={self.btc_date})>")
