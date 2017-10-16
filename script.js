var express = require('express');
var app = express();
var server = require('http').createServer(app);
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public/"))

app.get('/',(request,response)=>{
  res.sendFile(__dirname + "/public/index.html");
});
server.listen(port, function() {
  console.log ('node app is running on port', port);
})
app.listen(3000);
