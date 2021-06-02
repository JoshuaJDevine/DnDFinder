from .db import db


class Group(db.Model):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    details = db.Column(db.String(500), nullable=False, unique=True)
    where = db.Column(db.String(100), nullable=False, unique=True)
    module = db.Column(db.String(100), nullable=False, unique=True)
    dayOfWeek = db.Column(db.String(100), nullable=False, unique=True)
    startTime = db.Column(db.String(100), nullable=False, unique=True)
    endTime = db.Column(db.String(100), nullable=False, unique=True)
    timeOfDay = db.Column(db.String(100), nullable=False, unique=True)
    maxPartySize = db.Column(db.Integer, nullable=False)
    groupAdmin = db.Column(db.Integer, nullable=False)
    users = db.relationship("User", back_populates="group")

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
            "users": self.users,
            }