from app.api.dbSetup import SessionLocal
from app.api.models.ProfileModel import ProfileModel
from app.api.models.UserModel import User

import hashlib


class ProfileController:
    @staticmethod
    def update_profile(profile_model: ProfileModel):
        if not ProfileModel.is_valid_cpf(profile_model.email):
            return {'message': 'Invalid CPF format'}, 400

        if not ProfileModel.is_valid_telephone(profile_model.password):
            return {'message': 'Invalid telephone format'}, 400

        if not ProfileModel.is_valid_email(profile_model.email):
            return {'message': 'Invalid email format'}, 400

        if not ProfileModel.is_valid_password(profile_model.password):
            return {'message': 'Password must be at least 6 characters long'}, 400

        session = SessionLocal()

        sha256_hash = hashlib.sha256()
        sha256_hash.update(profile_model.password.encode('utf-8'))
        hashed_password = sha256_hash.hexdigest()

        user = session.query(User).filter_by(email=profile_model.email).first()

        if user is None:
            session.close()
            return {'message': 'User not found'}, 400

        if user.password != hashed_password:
            session.close()
            return {'message': 'Passwords do not match'}, 400

        user.cpf = profile_model.cpf
        user.address = profile_model.address
        user.telephone = profile_model.telephone

        session.commit()
        session.close()

        return {'message': 'Update successful'}, 200
