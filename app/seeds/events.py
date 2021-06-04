from app.models import db, Event
from randomNames import *
import random

def seed_events():
    event1 = Event(
        name="Session 1",
        location="Session 1",
        dayOfWeek="Session 1",
        startTime="Session 1",
        endTime="Session 1",
        timeOfDay="Session 1",
        notes="Session 1",
        group_id=1
    )
    db.session.add(event1)

    for x in range(15):
        randomTime = getRandomTime()
        random_event = Event(
            name="Session 1",
            location=getRandomPlatform(),
            dayOfWeek=getRandomDayOfWeek(),
            startTime=getRandomTime(),
            endTime=getRandomTime(),
            timeOfDay=getRandomTimeOfDay(),
            group_id=x
        )
        db.session.add(random_event)

    db.session.commit()


def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
