from .db import db
from .users_groups import users_groups


class Group(db.Model):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    details = db.Column(db.String(500), nullable=False)
    where = db.Column(db.String(100), nullable=False)
    module = db.Column(db.String(100), nullable=False)
    dayOfWeek = db.Column(db.String(100), nullable=False)
    startTime = db.Column(db.String(100), nullable=False)
    endTime = db.Column(db.String(100), nullable=False)
    timeOfDay = db.Column(db.String(100), nullable=False)
    maxPartySize = db.Column(db.Integer, nullable=False)
    groupAdmin = db.Column(db.Integer, nullable=False)
    timeZone = db.Column(db.String(100), nullable=False)

    # A group has many users, events, applications, and messages
    users = db.relationship(
        "User",
        secondary=users_groups,
        back_populates="groups"
    )
    events = db.relationship("Event", back_populates="group", cascade="all, delete")
    applications = db.relationship("Application", back_populates="group", cascade="all, delete")
    messages = db.relationship("Message", back_populates="group", cascade="all, delete")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "details": self.details,
            "where": self.where,
            "module": self.module,
            "dayOfWeek": self.dayOfWeek,
            "startTime": self.startTime,
            "endTime": self.endTime,
            "timeOfDay": self.timeOfDay,
            "maxPartySize": self.maxPartySize,
            "groupAdmin": self.groupAdmin,
            "timeZone": self.timeZone,
            "events": self.get_joined_events(),
            "applications": self.get_joined_applications(),
            "messages": self.get_joined_messages()
        }

    def to_dict_include_users(self):
        return {
            "id": self.id,
            "name": self.name,
            "details": self.details,
            "where": self.where,
            "module": self.module,
            "dayOfWeek": self.dayOfWeek,
            "startTime": self.startTime,
            "endTime": self.endTime,
            "timeOfDay": self.timeOfDay,
            "maxPartySize": self.maxPartySize,
            "groupAdmin": self.groupAdmin,
            "timeZone": self.timeZone,
            "users": self.get_joined_users(),
            "events": self.get_joined_events(),
            "applications": self.get_joined_applications(),
            "messages": self.get_joined_messages()
        }

    def get_joined_users(self):
        return [user.to_dict() for user in self.users]

    def get_joined_events(self):
        return [event.to_dict() for event in self.events]

    def get_joined_applications(self):
        return [application.to_dict() for application in self.applications]

    def get_joined_messages(self):
        return [message.to_dict() for message in self.messages]
