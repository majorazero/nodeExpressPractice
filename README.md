# nodeExpressPractice
This was made as a learning experience to use Test Driven Development when building projects, as well as to practice the Express node module and to get experience working with a database.

# Getting Started
- Install git
    - Installation Guide for [git](https://www.atlassian.com/git/tutorials/install-git)
- Install nodeJS
    - Here's a guide for the [Windows Installation of NodeJs](http://blog.teamtreehouse.com/install-node-js-npm-windows)
    - Here's a guide for the [Mac Installation of NodeJs](http://blog.teamtreehouse.com/install-node-js-npm-mac)
- Go to the command line and navigate to the folder you either cloned or downloaded
    - `cd yourFolderName`
- Run `npm install`
    - That should download all the dependencies.
- Install Redis
    - This app uses [Redis](https://redis.io/topics/quickstart) as database so you should install that.
# Running the App
- Start the database up, once you have installed redis, input the following to the console...
  ```
  redis-server
  ```
- There is an executable for this file that you can run...
  ```
  ./bin/www
  ```
  ...running that in the console should start the app. It defaults to http://localhost:3000

# Running the Tests
Tests can be run after starting up the Redis server by inputing the following into the console.
```
npm test
```

# Built With
- NodeJs - Runtime environment
- Express - Web Framework
- Redis - Database
- Supertests - Used for testing
- Mocha - Used for testing

# Version
- 1.0

# Author
- Daniel Hsu - I wrote this.

# Acknowledgement
- Code School - Was made following this [tutorial](https://www.codeschool.com/screencasts/build-an-express-js-app-with-tdd#comments).
