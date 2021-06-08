from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class CreateMessageForm(FlaskForm):
    text = StringField('text', validators=[DataRequired()])
    sender_id = IntegerField('sender_id', validators=[DataRequired()])
    group_id = IntegerField('group_id')
    event_id = IntegerField('event_id')
    user_id = IntegerField('user_id')
    application_id = IntegerField('application_id')
