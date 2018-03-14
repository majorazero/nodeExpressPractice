let express = require("express");
let app = express();

app.get('/',function(req,resp){
  resp.send('OK');
});

app.get('/cities',function(req,resp){
  let cities = ["Los Angeles","San Francisco","London"];
  resp.json(cities);
});

//app.listen(3000);
module.exports = app; //wrote it like this so our test.js can access it as a module
