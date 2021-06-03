from flask import Blueprint, jsonify, session, request
from flask_login import login_required

from app.models import Group, db
from app.forms import CreateGroupForm

group_routes = Blueprint('groups', __name__)


def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@login_required
@group_routes.route('/<int:id>/')
def user(id):
    group = Group.query.get(id)
    return group.to_dict()


@login_required
@group_routes.route('/')
def groups():
    groups = Group.query.all()
    all_groups = []
    for group in [group.to_dict() for group in groups]:
        all_groups.append(group)
    # return {"groups": [group.to_dict() for group in groups]}
    return jsonify(all_groups)

@login_required
@group_routes.route('/', methods=['POST'])
def create_group():
    print("-----------------------------------")
    print("-----------------------------------")
    print("api/groups/")

    form = CreateGroupForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print(form.data['name'], form.validate_on_submit())

    if form.validate_on_submit():
        group = Group(
            name=form.data['name'],
            details=form.data['details'],
            where=form.data['where'],
            module=form.data['module'],
            dayOfWeek=form.data['dayOfWeek'],
            startTime=form.data['startTime'],
            endTime=form.data['endTime'],
            timeOfDay=form.data['timeOfDay'],
            maxPartySize=form.data['maxPartySize'],
            groupAdmin=form.data['groupAdmin'],
        )
        db.session.add(group)
        db.session.commit()
        return group.to_dict()
    # print(validation_errors_to_error_messages(form.errors))

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401