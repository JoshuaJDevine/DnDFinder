from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class CreateMessageForm(FlaskForm):
    text = StringField('text', validators=[DataRequired()])