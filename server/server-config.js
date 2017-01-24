var express = require('express');
var mongoose = require('mongoose');
var StudentCtrl = require('./db/db-controller.js')

var app = express();

// mongoose.connect('mongodb://heroku_899x2dvs:nm3eu0klm66elkf99oinqacgbh@ds127389.mlab.com:27389/heroku_899x2dvs');

mongoose.connect('mongodb://localhost/students');

app.use(express.static('client'));

app.get('/server', function(req, res) {
  // res.send('bacon');
  res.send(StudentCtrl.getRandomStudent());
});

module.exports = app;