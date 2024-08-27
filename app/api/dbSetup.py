from app.api.dbSetupSingleton import dbSetupSingleton

engine = dbSetupSingleton.getEngine()
Base = dbSetupSingleton.getBase()
SessionLocal = dbSetupSingleton.getSession()