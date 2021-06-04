from app.models import db, Group
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






def getRandomName():
    prefix = ["Homebrew", "Epic", "Fun", "Laid back", "New", "Exciting", "Ongoing", "Serious", "Hardcore"]
    suffix = ["Campaign", "Group", "Adventure", "Story", "World", "Game", "Quest", "Escapade"]
    return prefix[random.randint(0, len(prefix) - 1)] + " " + suffix[random.randint(0, len(suffix) - 1)]


def getRandomPlatform():
    platforms = ["Discord",
                 "Roll 20",
                 "DnD Beyond",
                 "Skype",
                 "Fantasy Grounds",
                 "D20PRO",
                 "Foundry",
                 "Tabletop Simulator",
                 "Other"
                 ]
    return platforms[random.randint(0, len(platforms) - 1)]


def getRandomModule():
    modules = ["Curse of Strahd",
               "Out of the Abyss",
               "Descent into Avernus",
               "Storm King",
               "Yawning Portal",
               "Saltmarsh",
               "Tomb of Annihilation",
               "Phandelver",
               "Eberron",
               "Other"
               ]
    return modules[random.randint(0, len(modules) - 1)]


def getRandomDayOfWeek():
    days = ["Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            ]
    return days[random.randint(0, len(days) - 1)]


def getRandomTime():
    times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return times[random.randint(0, len(times) - 1)]

def getRandomTimeOfDay():
    times = ["PM", "AM"]
    return times[random.randint(0, len(times) - 1)]

def getRandomTimeZone():
    zones = ["AST", "EST", "PDT", "PST", "GMT", "CET", "EET", "CCT"]
    return zones[random.randint(0, len(zones) - 1)]
