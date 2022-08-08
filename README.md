# DreamJournal
Dream journal (REST API) - Backend Development Assignment

# Instructions
1. Clone this repository
2. run "npm i" to install packages
3. Make sure there is a local mongod Process running (type mongod in terminal).
Locally installed mongodb is required for this.
https://www.mongodb.com/docs/manual/administration/install-community/

4. Seed the database by running "npm run seed"
5. Start the server by running "npm start"

# Update 2022-08-08
Added few api tests
# note
I am currently on windows machine and running those tests on UNIX system might require changing the following scripts:
"test": "npm run seed_test && jest" <br>
"seed_test": "NODE_ENV=TEST babel-node src/seeds/seed.js"
