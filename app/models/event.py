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

    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"))
    group = db.relationship("Group", back_populates="events")

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
        }
