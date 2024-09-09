from flask import Blueprint, redirect, url_for

from app.main.controllers import IndexPageController

main = Blueprint('main', __name__,
                 static_url_path='',
                 static_folder='../static',
                 template_folder='../static')


@main.route('/login')
@main.route('/signup')
@main.route('/access')
@main.route('/profile')
@main.route('/robot')
def redirect_to_root():
    return redirect(url_for('main.index'), code=301)  # Permanent redirect


main.add_url_rule("/", view_func=IndexPageController.as_view("index"))
