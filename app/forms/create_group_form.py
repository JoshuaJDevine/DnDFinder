from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TimeField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, NumberRange


class CreateGroupForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    details = StringField('details', validators=[DataRequired()])
    where = StringField('where', validators=[DataRequired()])
    module = StringField('module', validators=[DataRequired()])
    dayOfWeek = SelectField('dayOfWeek', validators=[DataRequired()],
                            choices=[
                                ('Monday', 'Monday'),
                                ('Tuesday', 'Tuesday'),
                                ('Wednesday', 'Wednesday'),
                                ('Thursday', 'Thursday'),
                                ('Friday', 'Friday'),
                                ('Saturday', 'Saturday'),
                                ('Sunday', 'Sunday')
                            ])
    startTime = TimeField('startTime', validators=[DataRequired()])
    endTime = TimeField('endTime', validators=[DataRequired()])
    timeOfDay = SelectField('timeOfDay', validators=[DataRequired()],
                            choices=[
                                ('AM', 'AM'),
                                ('PM', 'PM'),
                            ])
    groupAdmin = IntegerField('groupAdmin', validators=[DataRequired()])
    maxPartySize = NumberRange('partySize')
