from app.models import db, Message
import random


def seed_messages():
    message2 = Message(
        text="Are we flexible on the time?",
        sender_id=2,
        group_id=2
    )
    db.session.add(message2)

    db.session.commit()


def undo_messages():
    db.session.execute('TRUNCATE messages RESTART IDENTITY CASCADE;')
    db.session.commit()
