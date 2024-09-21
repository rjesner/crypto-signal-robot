from flask import request, jsonify
import sys

from app.api.models.LoginModel import LoginModel
from app.api.models.SignUpModel import SignUpModel
from app.api.models.ProfileModel import ProfileModel
from app.api.controllers.LoginController import LoginController
from app.api.controllers.SignUpController import SignUpController
from app.api.controllers.AccessController import AccessController
from app.api.controllers.ProfileController import ProfileController
from app.api.controllers.RobotController import RobotController


def login_api():
    if request.method == 'POST':
        try:
            data = request.get_json()
            email = data.get('email')
            password = data.get('password')
            
            print(f"Received login data: Email: {email}", file=sys.stderr)
            
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


def access_api():
    if request.method == 'GET':
        try:
            response, status_code = AccessController.access()
            
            return jsonify(response), status_code
        
        except Exception as e:
            print(f"Error processing access request: {str(e)}", file=sys.stderr)
            return jsonify({'message': 'Internal server error'}), 500
    
    return jsonify({'message': 'Invalid request method'}), 405


def profile_api():
    if request.method == 'POST':
        try:
            data = request.get_json()
            email = data.get('email')
            password = data.get('password')
            cpf = data.get('cpf')
            address = data.get('address')
            telephone = data.get('telephone')
            
            print(f"Received profile data: Email: {email}, CPF: {cpf}, Address: {address}, Telephone: {telephone}", file=sys.stderr)
            
            profile_model = ProfileModel(email=email, password=password, cpf=cpf, address=address, telephone=telephone)
            response, status_code = ProfileController.update_profile(profile_model)
            
            return jsonify(response), status_code
        
        except Exception as e:
            print(f"Error processing profile request: {str(e)}", file=sys.stderr)
            return jsonify({'message': 'Internal server error'}), 500
    
    return jsonify({'message': 'Invalid request method'}), 405


def robot_api():
    if request.method == 'GET':
        try:
            response, status_code = RobotController.get_signal()
            
            return jsonify(response), status_code
        
        except Exception as e:
            print(f"Error processing robot request: {str(e)}", file=sys.stderr)
            return jsonify({'message': 'Internal server error'}), 500
    
    return jsonify({'message': 'Invalid request method'}), 405
