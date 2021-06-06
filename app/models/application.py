from .db import db


class Application(db.Model):
    __tablename__ = "applications"

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(1000), nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    group = db.relationship("Group", back_populates="applications")
    user = db.relationship("User", back_populates="applications")

    def to_dict(self):
        return {
            "id": self.id,
            "text": self.text,
        }
