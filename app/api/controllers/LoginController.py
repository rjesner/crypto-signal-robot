from app.dbSetup import SessionLocal
from app.api.models.LoginModel import LoginModel
from app.api.models.UserModel import User

import bcrypt


class LoginController:
    @staticmethod
    def login(login_model: LoginModel):
        if not LoginModel.is_valid_email(login_model.email):
            return {'message': 'Invalid email format'}, 400

        if not LoginModel.is_valid_password(login_model.password):
            return {'message': 'Password must be at least 6 characters long'}, 400

        session = SessionLocal()
        user = session.query(User).filter_by(email=login_model.email).first()

        if user is None:
            session.close()
            return {'message': 'User not found'}, 400

        if not bcrypt.checkpw(login_model.password.encode('utf-8'), user.password.encode('utf-8')):
            session.close()
            return {'message': 'Passwords do not match'}, 400

        session.close()
        return {'message': 'Login successful'}, 200
