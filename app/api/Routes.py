from flask import Blueprint
from app.api.Views import login_api, signup_api, access_api, profile_api, robot_api

api = Blueprint('api', __name__)

api.add_url_rule('/login', view_func=login_api, methods=['POST'])
api.add_url_rule('/signup', view_func=signup_api, methods=['POST'])
api.add_url_rule('/access', view_func=access_api, methods=['GET'])
api.add_url_rule('/profile', view_func=profile_api, methods=['POST'])
api.add_url_rule('/robot', view_func=robot_api, methods=['GET'])
