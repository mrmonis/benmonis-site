var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.resolve(__dirname, '/');
app.use(express.static(staticPath));

app.listen(3000, function() {
  console.log('listening');
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/christmas', function(req, res) {
	res.sendFile(__dirname + '/christmas/index.html');
});