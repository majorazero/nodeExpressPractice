let express = require("express");
let app = express();

app.get('/',function(req,resp){
  resp.send('OK');
});

app.listen(3000);
