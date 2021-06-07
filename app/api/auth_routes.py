import http.client
import json
from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login/', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    print(request.get_json())
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout/')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'UserView logged out'}


@auth_routes.route('/signup/', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized/')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401

@auth_routes.route('/devAuth')
def get_token():
    conn = http.client.HTTPSConnection("www.deviantart.com")
    payload = ''
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cookie': 'tpc=%7B%22noop%22%3Atrue%7D; userinfo=__97ed3c6f2e3e797540f2%3B%7B%22username%22%3A%22%22%2C%22uniqueid%22%3A%22c7f6d7296c4279b94ce984b4ca0b141d%22%2C%22dvs9-1%22%3A1%2C%22ab%22%3A%22tao-fl2-1-b-9%22%7D; vd=__7d7f9d1c70afca09d97a%3B%22BgvkYE%2CBgvkYE%2CA%2CP%2CA%2C%2CB%2CA%2CB%2CBgvlw0%2CBgvlw0%2CA%2CA%2CA%2CA%2C13%2CA%2CB%2CA%2CA%2CA%2CA%2CB%2CA%2CA%2C%22; _pxhd=129446a8b4a52b800e24b5624bf9af80552a7fe335203d9ff605d187c2ddb08c:fd8b4101-c7b2-11eb-b194-0b0bd9af4654'
    }
    conn.request("GET",
                 "/oauth2/token?grant_type=client_credentials&client_id=15994&client_secret=44bc38d4848174239706f05987448ebb&is_mature=False",
                 payload, headers)
    res = conn.getresponse()
    data = res.read()

    res = json.loads(data.decode("utf-8"))

    return res, 200
