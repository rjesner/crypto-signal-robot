from flask import request, jsonify
import sys

from app.api.models.LoginModel import LoginModel
from app.api.controllers.LoginController import LoginController
from app.api.models.SignUpModel import SignUpModel
from app.api.controllers.SignUpController import SignUpController


def login_api():
    if request.method == 'POST':
        try:
            data = request.get_json()
            email = data.get('email')
            password = data.get('password')
            remember_me = data.get('rememberMe')

            print(f"Received login data: Email: {email}, Password: {password}, Remember Me: {remember_me}", file=sys.stderr)

            login_model = LoginModel(email=email, password=password)
            response, status_code = LoginController.login(login_model)

            return jsonify(response), status_code

        except Exception as e:
            print(f"Error processing login request: {str(e)}", file=sys.stderr)
            return jsonify({'message': 'Internal server error'}), 500

    return jsonify({'message': 'Invalid request method'}), 405


def signup_api():
    if request.method == 'POST':
        try:
            data = request.get_json()
            first_name = data.get('firstName')
            last_name = data.get('lastName')
            email = data.get('email')
            password = data.get('password')

            print(f"Received sign-up data: First Name: {first_name}, Last Name: {last_name}, Email: {email}",
                  file=sys.stderr)

            sign_up_model = SignUpModel(first_name=first_name, last_name=last_name, email=email, password=password)
            response, status_code = SignUpController.signup(sign_up_model)

            return jsonify(response), status_code

        except Exception as e:
            print(f"Error processing sign-up request: {str(e)}", file=sys.stderr)
            return jsonify({'message': 'Internal server error'}), 500

    return jsonify({'message': 'Invalid request method'}), 405
