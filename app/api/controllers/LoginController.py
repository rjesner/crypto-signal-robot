from app.api.dbSetup import SessionLocal
from app.api.models.LoginModel import LoginModel
from app.api.models.UserModel import User

import hashlib


class LoginController:
    @staticmethod
    def login(login_model: LoginModel):
        if not LoginModel.is_valid_email(login_model.email):
            return {'message': 'Invalid email format'}, 400

        if not LoginModel.is_valid_password(login_model.password):
            return {'message': 'Password must be at least 6 characters long'}, 400

        session = SessionLocal()

        sha256_hash = hashlib.sha256()
        sha256_hash.update(login_model.password.encode('utf-8'))
        hashed_password = sha256_hash.hexdigest()

        user = session.query(User).filter_by(email=login_model.email).first()
        session.close()

        if user is None:
            return {'message': 'User not found'}, 400

        if user.password != hashed_password:
            return {'message': 'Passwords do not match'}, 400

        return {'message': 'Login successful'}, 200
