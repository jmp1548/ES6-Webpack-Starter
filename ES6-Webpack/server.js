var express = require('express');
var app = express();
var path = require('path');

app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3300, function () {
    console.log('listening on port 3300!');
});
