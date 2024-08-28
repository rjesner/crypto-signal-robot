from flask import Blueprint
from app.api.Views import login_api, signup_api, access_api

api = Blueprint('api', __name__)

api.add_url_rule('/login', view_func=login_api, methods=['POST'])
api.add_url_rule('/signup', view_func=signup_api, methods=['POST'])
api.add_url_rule('/access', view_func=access_api, methods=['GET'])
