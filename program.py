from flask import *
from flask_sqlalchemy import *
import os
from datetime import *

def get_json_client():
    return json.loads(request.get_data().decode('utf-8'))

def post_json_client(json_data):
    return make_response(jsonify(json_data), 200)

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY')

def start_server():
    if 'heroku' not in os.environ:
        app.run(debug=True)