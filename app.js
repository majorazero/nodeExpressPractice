let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let urlencode = bodyParser.urlencoded({extended:false}); //added as middleware which converts input into requests's body

app.use(express.static('public')); //mounts middleware
//redis connection
let redis = require('redis');
if (process.env.REDISTOGO_URL) {
  let rtg   = require("url").parse(process.env.REDISTOGO_URL);
  var client = redis.createClient(rtg.port, rtg.hostname); //for whatever reason client needs to be called using "var" or app will break.
  client.auth(rtg.auth.split(":")[1]);
}
else {
  var client = redis.createClient();
  client.select((process.env.NODE_ENV || "development").length); //each production will have a differnet client based on their different sizes.
}

//end redis connection

client.hset("cities","Los Angeles","Sunny place to be.");
client.hset("cities","San Francisco","Gloomy place to be.");
client.hset("cities","London","All hail the queen.");

app.get('/cities',function(req,resp){
  client.hkeys("cities",function(error, names){
    if (error) throw error;
    resp.json(names);
    //resp.json(Object.keys(names));
    //resp.json(Object.keys(cities));
  });
});
app.post('/cities',urlencode,function(req,resp){ //middleware can be passed as a inbetween argument
  let newCity = req.body;
  client.hset("cities",newCity.name,newCity.description,function(error){
    if (error) throw error;
    resp.status(201).json(newCity.name);
    // cities[newCity.name] = newCity.description;
    // resp.status(201).json(newCity.name);
  });
});
app.delete('/cities/:name',function(req,resp){
  client.hdel('cities',req.params.name,function(error){
    if(error) throw error;
    resp.sendStatus(204);
  });
});

//app.listen(3000);
module.exports = app; //wrote it like this so our test.js can access it as a module
