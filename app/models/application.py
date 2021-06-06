from .db import db


class Application(db.Model):
    __tablename__ = "applications"

    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.Boolean, default=False)

    # An application has one group
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"), nullable=False)
    group = db.relationship("Group", back_populates="applications")

    # An application has one user
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    user = db.relationship("User", back_populates="applications")

    # An application has many messages
    messages = db.relationship("Message", back_populate="application")

    def to_dict(self):
        return {
            "id": self.id,
            "status": self.status,
            "messages": self.messages(),
            "userId": self.user_id,
        }
