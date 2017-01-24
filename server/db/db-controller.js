var mongoose = require('mongoose');
var express = require('express');
var Student = require('./db-model.js');
var seed = require('./seed.js');

// Student.drop('Students');
// Student.insertMany(seed);


exports.getRandomStudent = function(req, res, next) {
  Student.find({})
    .then(function(user) {
      var random = (function() {
        return Math.floor(Math.random() * 3) + 1;
      })();

      console.log(user[random].student);
      return user[random].student;
    })
    .catch(function(err) {
      console.error(err);
    });
};

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