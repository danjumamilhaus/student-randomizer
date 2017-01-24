var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/stud-rando');

// app.get('/', function(req, res) {});

module.exports = app;