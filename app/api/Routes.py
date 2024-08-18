from flask import Blueprint
from app.api.Views import login_api

api = Blueprint('api', __name__)

api.add_url_rule('/login', view_func=login_api, methods=['POST'])