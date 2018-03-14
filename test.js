//Created to test our app
var request = require('supertest');
var app = require('./app');

//following is mocha code

describe('Requests to the root path',function(){
  it('Returns a 200 status code',function(done){
    //following is a format that we'll design our test after.
    request(app)
      .get('/')
      .expect(200)
      .end(function(error){
        if(error) throw error;
        done();
      });
  });
});
describe('Listing cities',function(){
  it('Returns a 200 status code',function(done){
    request(app)
    .get('/cities') //searches for the cities endpoint (address)
    .expect(200,done); //alternative way of writing above code
  });
});
