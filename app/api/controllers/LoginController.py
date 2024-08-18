from app.api.models.LoginModel import LoginModel


class LoginController:
    @staticmethod
    def login(login_model: LoginModel):
        if not LoginModel.is_valid_email(login_model.email):
            return {'message': 'Invalid email format'}, 400

        if not LoginModel.is_valid_password(login_model.password):
            return {'message': 'Password must be at least 6 characters long'}, 400

        return {'message': 'Login successful'}, 200
