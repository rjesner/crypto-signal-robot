from app.dbSetup import SessionLocal
from app.api.models.SignUpModel import SignUpModel
from app.api.models.UserModel import User

import bcrypt


class SignUpController:
    @staticmethod
    def signup(sign_up_model: SignUpModel):
        if not SignUpModel.is_valid_name(sign_up_model.first_name):
            return {'message': 'Primeiro nome inválido. Deve conter somente números e letras do alfabeto.'}, 400
        
        if not SignUpModel.is_valid_name(sign_up_model.last_name):
            return {'message': 'Último nome inválido. Deve conter somente números e letras do alfabeto.'}, 400
        
        if not SignUpModel.is_valid_email(sign_up_model.email):
            return {'message': 'Formato de email inválido'}, 400
        
        if not SignUpModel.is_valid_password(sign_up_model.password):
            return {'message': 'A senha deve ter no mínimo 6 caracteres'}, 400
        
        session = SessionLocal()
        
        hashed_password = bcrypt.hashpw(sign_up_model.password.encode('utf-8'), bcrypt.gensalt())
        
        new_user = User(
            firstname=sign_up_model.first_name,
            lastname=sign_up_model.last_name,
            email=sign_up_model.email,
            password=hashed_password.decode('utf-8'),
            recovery='---',
            cpf='---',
            address='---',
            telephone='---'
        )
        session.add(new_user)
        session.commit()
        session.close()
        
        return {'message': 'Registro com sucesso'}, 201
