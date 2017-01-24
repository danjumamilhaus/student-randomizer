var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/students' || process.env.MONGODB_URI);

app.get('/', function(req, res) {
  res.send('bacon');
});

module.exports = app;