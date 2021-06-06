from werkzeug.security import generate_password_hash
from app.models import db, User, Group

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io', password='password')
    db.session.add(demo)

    demo2 = User(username='chrisOdin', email='chrisOdinson@wotc.com', password='password')

    # Test group for user 2
    groupTest = Group(
        name="Test Adventure",
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
    demo2.groups.append(groupTest)
    db.session.add(demo2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()







