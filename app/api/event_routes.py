from flask import Blueprint, jsonify, session, request
from flask_login import login_required

from app.models import Event, db
from app.forms import CreateEventForm

event_routes = Blueprint('events', __name__)

def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


# Get one event
@login_required
@event_routes.route('/<int:id>/')
def event(id):
    event = Event.query.get(id)
    return event.to_dict()


# Get all events
@login_required
@event_routes.route('/')
def events():
    events = Event.query.all()
    all_events = []
    for event in [event.to_dict() for event in events]:
        all_events.append(event)
    return jsonify(all_events)


# Create new event
@login_required
@event_routes.route('/', methods=['POST'])
def create_event():
    form = CreateEventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print(form.data['name'], form.validate_on_submit())
    # print(form.data['timeZone'], form.validate_on_submit())

    if form.validate_on_submit():
        event = Event(
            name=form.data['name'],
            location=form.data['location'],
            dayOfWeek=form.data['dayOfWeek'],
            startTime=form.data['startTime'],
            endTime=form.data['endTime'],
            timeOfDay=form.data['timeOfDay'],
            notes=form.data['notes'],
        )

        db.session.add(event)
        db.session.commit()

        new_event = []
        new_event.append(event.to_dict())
        return jsonify(new_event)
    # print(validation_errors_to_error_messages(form.errors))

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Update an event
@login_required
@event_routes.route('/<int:id>/', methods=['PUT'])
def update_event(id):
    form = CreateEventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        event = Event(
            name=form.data['name'],
            location=form.data['location'],
            dayOfWeek=form.data['dayOfWeek'],
            startTime=form.data['startTime'],
            endTime=form.data['endTime'],
            timeOfDay=form.data['timeOfDay'],
            notes=form.data['notes'],
        )

        event_to_update = Event.query.get(id)
        event_to_update.name = form.data['name'],
        event_to_update.location = form.data['location'],
        event_to_update.dayOfWeek = form.data['dayOfWeek'],
        event_to_update.startTime = form.data['startTime'],
        event_to_update.endTime = form.data['endTime'],
        event_to_update.timeOfDay = form.data['timeOfDay'],
        event_to_update.notes = form.data['notes'],

        db.session.commit()

        updated_event = []
        updated_event.append(event_to_update.to_dict())
        return jsonify(updated_event)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Delete an event
@login_required
@event_routes.route('/<int:id>/', methods=['DELETE'])
def delete_event(id):
    event_to_delete = Event.query.get(id)
    db.session.delete(event_to_delete)
    db.session.commit()
    return event_to_delete.to_dict()
