from flask import request, jsonify
import sys

from app.api.models.LoginModel import LoginModel
from app.api.controllers.LoginController import LoginController


def login_api():
    if request.method == 'POST':
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        remember_me = data.get('rememberMe')

        print(f"Received login data: Email: {email}, Password: {password}, Remember Me: {remember_me}", file=sys.stderr)

        login_model = LoginModel(email=email, password=password)

        response, status_code = LoginController.login(login_model)

        return jsonify(response), status_code

    return jsonify({'message': 'Invalid request method'}), 405
