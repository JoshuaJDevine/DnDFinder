from flask import Blueprint, jsonify, session, request
from flask_login import login_required

from app.models import Message, db
from app.forms import CreateMessageForm

message_routes = Blueprint('messages', __name__)


def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


# Get one message
@login_required
@message_routes.route('/<int:id>/')
def message(id):
    message = Message.query.get(id)
    return message.to_dict()


# Get all messages
@login_required
@message_routes.route('/')
def messages():
    messages = Message.query.all()
    all_messages = []
    for message in [message.to_dict() for message in messages]:
        all_messages.append(message)
    return jsonify(all_messages)


# Create new message
@login_required
@message_routes.route('/', methods=['POST'])
def create_message():
    form = CreateMessageForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        message = Message(
            text=form.data['text'],
            group_id=form.data['group_id'],
            user_id=form.data['user_id'],
            event_id=form.data['event_id'],
            application_id=form.data['application_id'],
        )

        db.session.add(message)
        db.session.commit()

        new_message = []
        new_message.append(message.to_dict())
        return jsonify(new_message)

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Update an message
@login_required
@message_routes.route('/<int:id>/', methods=['PUT'])
def update_message(id):
    form = CreateMessageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        message = Message(
            text=form.data['text'],
            group_id=form.data['group_id'],
            user_id=form.data['user_id'],
            event_id=form.data['event_id'],
            application_id=form.data['application_id'],
        )

        message_to_update = Message.query.get(id)
        message_to_update.text = form.data['text'],

        db.session.commit()

        updated_message = []
        updated_message.append(message_to_update.to_dict())
        return jsonify(updated_message)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Delete a message
@login_required
@message_routes.route('/<int:id>/', methods=['DELETE'])
def delete_event(id):
    message_to_delete = Message.query.get(id)
    db.session.delete(message_to_delete)
    db.session.commit()
    return message_to_delete.to_dict()
