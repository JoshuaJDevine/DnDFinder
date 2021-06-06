from flask import Blueprint, jsonify, session, request
from flask_login import login_required

from app.models import Application, db
from app.forms import ApplicationForm

application_routes = Blueprint('applications', __name__)


def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


# Get one application
@login_required
@application_routes.route('/<int:id>/')
def application(id):
    application = Application.query.get(id)
    return application.to_dict()


# Get all applications
@login_required
@application_routes.route('/')
def applications():
    applications = Application.query.all()
    all_applications = []
    for application in [application.to_dict() for application in applications]:
        all_applications.append(application)
    return jsonify(all_applications)


# Create new application
@login_required
@application_routes.route('/', methods=['POST'])
def create_application():
    form = ApplicationForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        application = Application(
            text=form.data['text'],
            group_id=form.data['group_id'],
            user_id=form.data['user_id'],
        )

        db.session.add(application)
        db.session.commit()

        new_application = []
        new_application.append(application.to_dict())
        return jsonify(new_application)

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Update an application
@login_required
@application_routes.route('/<int:id>/', methods=['PUT'])
def update_application(id):
    form = ApplicationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        application = Application(
            text=form.data['text'],
            group_id=form.data['group_id'],
            user_id=form.data['user_id'],
        )

        application_to_update = Application.query.get(id)
        application_to_update.text = form.data['text'],

        db.session.commit()

        updated_application = []
        updated_application.append(application_to_update.to_dict())
        return jsonify(updated_application)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Delete an application
@login_required
@application_routes.route('/<int:id>/', methods=['DELETE'])
def delete_event(id):
    application_to_delete = Application.query.get(id)
    db.session.delete(application_to_delete)
    db.session.commit()
    return application_to_delete.to_dict()
