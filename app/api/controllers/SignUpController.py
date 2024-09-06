from app.dbSetup import SessionLocal
from app.api.models.SignUpModel import SignUpModel
from app.api.models.UserModel import User

import hashlib


class SignUpController:
	@staticmethod
	def signup(sign_up_model: SignUpModel):
		if not SignUpModel.is_valid_name(sign_up_model.first_name):
			return {'message': 'Invalid first name. It should contain only alphabetic characters and spaces.'}, 400

		if not SignUpModel.is_valid_name(sign_up_model.last_name):
			return {'message': 'Invalid last name. It should contain only alphabetic characters and spaces.'}, 400

		if not SignUpModel.is_valid_email(sign_up_model.email):
			return {'message': 'Invalid email format'}, 400

		if not SignUpModel.is_valid_password(sign_up_model.password):
			return {'message': 'Password must be at least 6 characters long'}, 400

		session = SessionLocal()

		sha256_hash = hashlib.sha256()
		sha256_hash.update(sign_up_model.password.encode('utf-8'))
		hashed_password = sha256_hash.hexdigest()

		new_user = User(
			firstname=sign_up_model.first_name,
			lastname=sign_up_model.last_name,
			email=sign_up_model.email,
			password=hashed_password,
			cpf='---',
			address='---',
			telephone='---'
		)
		session.add(new_user)
		session.commit()
		session.close()

		return {'message': 'User registered successfully'}, 201
