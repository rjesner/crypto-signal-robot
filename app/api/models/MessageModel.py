from sqlalchemy import Column, Integer, Text, ForeignKey, Date, func
from app.dbSetup import Base


class Message(Base):
	__tablename__ = 'messages'
	
	id = Column(Integer, primary_key=True, autoincrement=True)
	user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
	message = Column(Text, nullable=False)
	created_at = Column(Date, default=func.current_date())
	
	def __repr__(self):
		return (f"<Message(id={self.id}, user_id={self.user_id}, "
				f"message={self.message}, created_at={self.created_at})>")