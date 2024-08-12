from flask import Blueprint

from app.main.controllers import IndexPageController, ListNotesController
from app.main.views import redirect_page

main = Blueprint('main', __name__,
                 static_url_path='',
                 static_folder='../static',
                 template_folder='../static')

main.add_url_rule("/", view_func=IndexPageController.as_view("index"))
main.add_url_rule('/list_notes', view_func=ListNotesController.as_view("list_notes"))
main.add_url_rule("/redirect", view_func=redirect_page)
