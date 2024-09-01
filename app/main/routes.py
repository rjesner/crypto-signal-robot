from flask import Blueprint

from app.main.controllers import IndexPageController

main = Blueprint('main', __name__,
                 static_url_path='',
                 static_folder='../static',
                 template_folder='../static')

main.add_url_rule("/", view_func=IndexPageController.as_view("index"))
