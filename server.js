var express = require('express');

var app = express();
var http = require('http').Server(app);
var httpPort = process.env.PORT || 3000;

http.listen(httpPort);

app.use(express.static('./public'));
console.log('# Server running on port ' + httpPort);