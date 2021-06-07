import http.client
import json
from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

image_routes = Blueprint('images', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return


@image_routes.route('/<string:token>/')
def get_images(token):
    conn = http.client.HTTPSConnection("www.deviantart.com")
    payload = ''
    headers = {
        'Cookie': 'tpc=%7B%22noop%22%3Atrue%7D; userinfo=__97ed3c6f2e3e797540f2%3B%7B%22username%22%3A%22%22%2C%22uniqueid%22%3A%22c7f6d7296c4279b94ce984b4ca0b141d%22%2C%22dvs9-1%22%3A1%2C%22ab%22%3A%22tao-fl2-1-b-9%22%7D; vd=__7d7f9d1c70afca09d97a%3B%22BgvkYE%2CBgvkYE%2CA%2CP%2CA%2C%2CB%2CA%2CB%2CBgvlw0%2CBgvlw0%2CA%2CA%2CA%2CA%2C13%2CA%2CB%2CA%2CA%2CA%2CA%2CB%2CA%2CA%2C%22; _pxhd=129446a8b4a52b800e24b5624bf9af80552a7fe335203d9ff605d187c2ddb08c:fd8b4101-c7b2-11eb-b194-0b0bd9af4654'
    }
    conn.request("GET",
                 "/api/v1/oauth2/browse/topic?access_token=" + token + "a&topic=fantasy",
                 payload, headers)
    res = conn.getresponse()
    data = res.read()

    res = json.loads(data.decode("utf-8"))

    return res, 200
