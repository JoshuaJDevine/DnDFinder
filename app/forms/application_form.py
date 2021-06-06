from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class ApplicationForm(FlaskForm):
    text = StringField('text', validators=[DataRequired()])
    group_id = IntegerField('group_id', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
