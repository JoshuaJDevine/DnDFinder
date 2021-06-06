from .db import db


class Application(db.Model):
    __tablename__ = "applications"

    id = db.Column(db.Integer, primary_key=True)

    def to_dict(self):
        return {
            "id": self.id,
        }
