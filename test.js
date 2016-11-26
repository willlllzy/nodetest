var express = require('express')
var app = express();

app.listen(1337, function() {
  console.log('listening at port 1337')
});

app.get('/', function(req, res) {
  res.send('hello world')
});
