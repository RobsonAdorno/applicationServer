var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("Teste");
});

// use port 3000 unless there exists a preconfigured port
var port = process.env.port || 5000;

app.listen(port);