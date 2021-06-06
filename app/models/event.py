from .db import db


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    dayOfWeek = db.Column(db.String(100), nullable=False)
    startTime = db.Column(db.String(100), nullable=False)
    endTime = db.Column(db.String(100), nullable=False)
    timeOfDay = db.Column(db.String(100), nullable=False)
    notes = db.Column(db.String(500))

    # An event has one group
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"), nullable=False)
    group = db.relationship("Group", back_populates="events")

    #  An event has many messages
    messages = db.relationship("Message", back_populate="event")


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "location": self.location,
            "dayOfWeek": self.dayOfWeek,
            "startTime": self.startTime,
            "endTime": self.endTime,
            "timeOfDay": self.timeOfDay,
            "notes": self.notes,
            "messages": self.get_joined_messages()
        }

    def get_joined_messages(self):
        return [message.to_dict() for message in self.messages]
