//Created to test our app
var request = require('supertest');
var app = require('./app');

//following is a format that we'll design our test after.
request(app)
  .get('/')
  .expect(200)
  .end(function(error){
    if(error) throw error;
    console.log("Done");
  });
