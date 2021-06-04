from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class CreateEventForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    location = StringField('where', validators=[DataRequired()])
    dayOfWeek = StringField('dayOfWeek', validators=[DataRequired()])
    startTime = IntegerField('startTime', validators=[DataRequired()])
    endTime = IntegerField('endTime', validators=[DataRequired()])
    timeOfDay = StringField('timeOfDay', validators=[DataRequired()])
    details = StringField('details')
    group_id = IntegerField('group_id', validators=[DataRequired()])