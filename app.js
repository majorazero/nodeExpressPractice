let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let urlencode = bodyParser.urlencoded({extended:false});

// app.get('/',function(req,resp){
//   resp.send('OK');
// });
app.use(express.static('public')); //mounts middleware

let cities = {
        "Los Angeles": "Sunny place to be.",
        "San Francisco": "Gloomy place to be.",
        "London": "All hail the queen."
      };

app.get('/cities',function(req,resp){
  resp.json(Object.keys(cities));
});

app.post('/cities',urlencode,function(req,resp){
  let newCity = req.body;
  cities[newCity.name] = newCity.description;
  resp.status(201).json(newCity.name);
});

//app.listen(3000);
module.exports = app; //wrote it like this so our test.js can access it as a module
