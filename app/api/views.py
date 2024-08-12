from flask import request, jsonify
from time import time
import sys


def index_api():
    return jsonify({'hello': 'World'})


def time_api():
    return jsonify({"time": time()})


def login_api():
    if request.method == 'POST':
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        remember_me = data.get('rememberMe')

        print(f"Received login data: Email: {email}, Password: {password}, Remember Me: {remember_me}", file=sys.stderr)

        return jsonify({'message': 'Login successful'}), 200
    return jsonify({'message': 'Invalid request method'}), 405
