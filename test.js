//Created to test our app
let request = require('supertest');
let app = require('./app');
let redis = require("redis");
let client = redis.createClient();

client.select("test".length);
client.flushdb();
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
  it('Returns a HTML format',function(done){
    request(app)
    .get('/')
    .expect("Content-Type",/html/,done);
  });
  it('Returns an index file with Cities',function(done){
    request(app)
    .get("/")
    .expect(/cities/i,done); //the /i behind cities makes it case insensitive also we don't use double quotation because its a property
  });
});

describe('Listing cities',function(){
  it('Returns a 200 status code',function(done){
    request(app)
    .get('/cities') //searches for the cities endpoint (address)
    .expect(200,done); //alternative way of writing above code
  });
  it('Returns JSON format', function(done){
    request(app)
    .get('/cities')
    .expect('Content-Type',/json/,done);
  });
  it("Returns initial cities", function(done){
    request(app)
    .get("/cities")
    .expect(JSON.stringify([]),done);
  });
});

describe("Creating new cities", function(){
  it("Returns a 201 status code", function(done){
    request(app)
    .post("/cities")
    .send("name=Springfield&description=where+the+Simpsons+live")
    .expect(201,done);
  });
  it("Returns a city name",function(done){
    request(app)
    .post("/cities")
    .send("name=Springfield&description=where+the+Simpsons+live")
    .expect(/springfield/i,done);
  });
});
