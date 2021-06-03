# DnDFinder
An open source DnD group finder

Deploy to Heroku
Create a new project on Heroku

Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"

Install the Heroku CLI

Run

heroku login
Login to the heroku container registry

heroku container:login
Update the REACT_APP_BASE_URL variable in the Dockerfile. This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"

Push your docker container to heroku from the root directory of your project. This will build the dockerfile and push the image to your heroku container registry

heroku container:push web -a dnd-finder
Release your docker container to heroku

heroku container:release web -a dnd-finder
set up your database:

heroku run -a dnd-finder flask db upgrade
heroku run -a dnd-finder flask seed all
Under Settings find "Config Vars" and add any additional/secret .env variables.

profit