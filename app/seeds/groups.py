from app.models import db, Group
from randomNames import *
import random

def seed_groups():
    group1 = Group(
        name="New Adventure",
        details="A long description of the details",
        where="Roll 20",
        module="Homebrew",
        dayOfWeek="Monday",
        startTime="3",
        endTime="5",
        timeOfDay="PM",
        maxPartySize=5,
        groupAdmin=2,
        timeZone="PDT"
    )
    db.session.add(group1)

    for x in range(20):
        randomTime = getRandomTime()
        random_group = Group(
            name=getRandomName(),
            details="A long description of the details",
            where=getRandomPlatform(),
            module=getRandomModule(),
            dayOfWeek=getRandomDayOfWeek(),
            startTime=randomTime,
            endTime=randomTime + random.randint(2, 5),
            timeOfDay=getRandomTimeOfDay(),
            maxPartySize=random.randint(3, 8),
            groupAdmin=2,
            timeZone=getRandomTimeZone()
        )
        db.session.add(random_group)

    db.session.commit()

def undo_groups():
    db.session.execute('TRUNCATE groups RESTART IDENTITY CASCADE;')
    db.session.commit()
