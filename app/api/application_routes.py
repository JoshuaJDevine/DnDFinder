from flask import Blueprint, jsonify, session, request
from flask_login import login_required

from app.models import Application, db
from app.forms import ApplicationForm

group_routes = Blueprint('applications', __name__)


def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


# Get one application
@login_required
@group_routes.route('/<int:id>/')
def application(id):
    application = Application.query.get(id)
    return application.to_dict()
