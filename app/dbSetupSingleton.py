from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


class dbSetupSingleton:
	__engine = None
	__base = None
	__session = None

	@classmethod
	def getEngine(cls):
		if not cls.__engine:
			DATABASE_URL = "mariadb+mariadbconnector://root:pass123@192.168.99.101:3306/tradingbot"
			cls.__engine = create_engine(DATABASE_URL)

			with open('app/sql/Users.sql', 'r') as file:
				create_table_sql = file.read()
			with cls.__engine.connect() as connection:
				connection.execute(text(create_table_sql))

			with open('app/sql/BTCHistory.sql', 'r') as file:
				create_table_sql = file.read()
			with cls.__engine.connect() as connection:
				connection.execute(text(create_table_sql))
			
			with open('app/sql/Messages.sql', 'r') as file:
				create_table_sql = file.read()
			with cls.__engine.connect() as connection:
				connection.execute(text(create_table_sql))
		return cls.__engine

	@classmethod
	def getBase(cls):
		if not cls.__base:
			cls.__base = declarative_base()
		return cls.__base

	@classmethod
	def getSession(cls):
		if not cls.__session:
			cls.__session = sessionmaker(autocommit=False, autoflush=False, bind=cls.__engine)
		return cls.__session
