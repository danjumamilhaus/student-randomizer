var express = require('express');
var mongoose = require('mongoose');
var StudentCtrl = require('./db/db-controller.js')
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://heroku_9v678l10:lvsjk9mbh74cfjusecqh1ed3ae@ds133438.mlab.com:33438/heroku_9v678l10');

// mongoose.connect('mongodb://localhost/students');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/students', StudentCtrl.getRandomStudent);

module.exports = app;