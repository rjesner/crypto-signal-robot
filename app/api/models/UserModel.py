from sqlalchemy import Column, String, Integer
from app.dbSetup import Base


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    firstname = Column(String(50))
    lastname = Column(String(50))
    email = Column(String(100))
    password = Column(String(100))
    cpf = Column(String(100))
    address = Column(String(100))
    telephone = Column(String(100))

    def __repr__(self):
        return (f"<User(id={self.id}, firstname={self.firstname}, "
                f"lastname={self.lastname}, email={self.email}, "
                f"cpf={self.cpf}, address={self.address}, "
                f"telephone={self.telephone})>")
