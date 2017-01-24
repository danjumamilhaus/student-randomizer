var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/students' || 'mongodb://danjumamilhaus@gmail.com:studentrandomizer@ds127389.mlab.com:27389/heroku_899x2dvs');

app.get('/', function(req, res) {
  res.send('bacon');
});

module.exports = app;