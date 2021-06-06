from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/includeGroups/')
@login_required
def usersWithGroups():
    users = User.query.all()
    return {"users": [user.to_dict_include_groups() for user in users]}


@user_routes.route('/<int:id>/')
def user(id):
    user = User.query.get(id)
    return user.to_dict()
