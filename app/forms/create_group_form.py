from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TimeField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, NumberRange


class CreateGroupForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    details = StringField('details', validators=[DataRequired()])
    where = StringField('where', validators=[DataRequired()])
    module = StringField('module', validators=[DataRequired()])
    dayOfWeek = StringField('dayOfWeek', validators=[DataRequired()])
    startTime = IntegerField('startTime', validators=[DataRequired()])
    endTime = IntegerField('endTime', validators=[DataRequired()])
    timeOfDay = StringField('timeOfDay', validators=[DataRequired()])
    groupAdmin = IntegerField('groupAdmin', validators=[DataRequired()])
    maxPartySize = IntegerField('partySize', validators=[DataRequired()])
    timeZone = StringField('timeZone', validators=[DataRequired()])
