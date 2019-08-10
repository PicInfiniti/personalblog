var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
