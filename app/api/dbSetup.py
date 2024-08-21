from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


DATABASE_URL = "mariadb+mariadbconnector://root:pass123@192.168.99.101:3306/tradingbot"
engine = create_engine(DATABASE_URL)


sql_file_path = 'app/api/dbSetup.sql'
with open(sql_file_path, 'r') as file:
    create_table_sql = file.read()
with engine.connect() as connection:
    connection.execute(text(create_table_sql))


Base = declarative_base()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

