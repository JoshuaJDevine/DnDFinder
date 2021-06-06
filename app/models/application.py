from .db import db


class Application(db.Model):
    __tablename__ = "applications"

    id = db.Column(db.Integer, primary_key=True)
    messages = db.relationship("Message", back_populates="application")

    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    group = db.relationship("Group", back_populates="applications")
    user = db.relationship("User", back_populates="applications")

    def to_dict(self):
        return {
            "id": self.id,
            "messages": self.get_joined_users(),
        }

    def get_joined_messages(self):
        return [message.to_dict() for user in self.users]