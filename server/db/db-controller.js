var mongoose = require('mongoose');
var express = require('express');
var Student = require('./db-model.js');
var seed = require('./seed.js');

/////////////////////////////////////////////////
////////// KENNY LOGGINS DANGER ZONE ///////////
///////////////////////////////////////////////
// Student.drop('Students');
// var db = mongoose.connection;

// db.collection('Students').drop(function(err) {
//   if (err) {
//     throw err;
//   }
// });
// Student.insertMany(seed);
///////////////////////////////////////
//////////////////////////////////////
/////////////////////////////////////


module.exports = {
  getRandomStudent: function(req, res, next) {
    Student.find({})
      .then(function(user) {
        var random = (function() {
          return Math.floor(Math.random() * 24) + 1;
        })();
        res.json(user[random].student);
      })
      .catch(function(err) {
        console.error(err);
      });
  }
}

// module.exports = {
//   allStudents: function(req,res, next) {
//     Student.find()
//     .then(function(users) {
//       res.send(users);
//     })
//     .catch(function(err) {
//       console.error(err);
//     });
//   }
// };