from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    # A user has one group
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"))
    group = db.relationship("Group", back_populates="users")

    # A user has many applications
    applications = db.relationship("Application", back_populates="user")

    # A user has many messages
    messages = db.relationship("Message", back_populates="user")


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "applications": self.get_joined_applications(),
            "messages": self.get_joined_messages()
        }

    def get_joined_applications(self):
        return [application.to_dict() for application in self.applications]

    def get_joined_messages(self):
        return [message.to_dict() for message in self.messages]
