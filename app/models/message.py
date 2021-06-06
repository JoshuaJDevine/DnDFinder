from .db import db


class Message(db.Model):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(1000), nullable=False)

    application_id = db.Column(db.Integer, db.ForeignKey("applications.id"))
    event_id = db.Column(db.Integer, db.ForeignKey("events.id"))
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    application = db.relationship("Application", back_populates="messages")
    event = db.relationship("Event", back_populates="messages")
    group = db.relationship("Group", back_populates="messages")
    user = db.relationship("User", back_populates="messages")

    def to_dict(self):
        return {
            "id": self.id,
            "text": self.text,
        }