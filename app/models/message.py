from .db import db


class Message(db.Model):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(1000), nullable=False)

    # Messages has one application
    application_id = db.Column(db.Integer, db.ForeignKey("applications.id"))
    application = db.relationship("Application", back_populates="messages")

    # Or a message has one event
    event_id = db.Column(db.Integer, db.ForeignKey("events.id"))
    event = db.relationship("Event", back_populates="messages")

    # Or a message has one group
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"))
    group = db.relationship("Group", back_populates="messages")

    # And a message always has one user
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    user = db.relationship("User", back_populates="messages")

    def to_dict(self):
        return {
            "id": self.id,
            "text": self.text,
        }