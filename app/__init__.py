from flask import Flask
from flask_cors import CORS
import threading
from app.dbTasks import setup_btc_history
from app.simpleMailer import simpleMailer

app = Flask(__name__)
CORS(app)

simpleMailer.initMailer(app)

from app.main.routes import main as main_blueprint  # noqa: E402
from app.api.Routes import api as api_blueprint  # noqa: E402

app.register_blueprint(main_blueprint)
app.register_blueprint(api_blueprint, url_prefix='/api')


def run_db_setup():
	setup_btc_history()
	# Schedule the next run in 24 hours
	threading.Timer(86400, run_db_setup).start()  # 86400 seconds = 24 hours


# Start the initial setup
run_db_setup()
