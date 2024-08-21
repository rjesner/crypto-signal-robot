from sqlalchemy import Column, String, Integer
from app.api.dbSetup import Base


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    firstname = Column(String(50))
    lastname = Column(String(50))
    email = Column(String(100))
    password = Column(String(100))

    def __repr__(self):
        return f"<User(id={self.id}, firstname={self.firstname}, lastname={self.lastname}, email={self.email})>"
