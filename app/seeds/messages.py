from app.models import db, Message
import random


def seed_messages():
    message1 = Message(
        text="Test message from user 1 to user 1",
        sender_id=1,
        user_id=1
    )
    db.session.add(message1)
    message2 = Message(
        text="Test message from user 2 to group 2",
        sender_id=2,
        group_id=2
    )
    db.session.add(message2)
    message3 = Message(
        text="Test message from user 2 to event 3",
        sender_id=2,
        event_id=3
    )
    db.session.add(message3)
    message4 = Message(
        text="Test message from user 1 to application 1",
        sender_id=1,
        application=1
    )
    db.session.add(message4)

    db.session.commit()


def undo_messages():
    db.session.execute('TRUNCATE messages RESTART IDENTITY CASCADE;')
    db.session.commit()
