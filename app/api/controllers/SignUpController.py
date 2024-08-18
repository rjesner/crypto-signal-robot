from app.api.models.SignUpModel import SignUpModel


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

		# Here, the logic to save the user to a database.
		# For now, a success message.

		# Mock response for successful sign-up
		return {'message': 'User registered successfully'}, 201
