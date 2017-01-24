var Student = require('./db-model.js');

module.exports = {
  allStudents: function(req,res, next) {
    Student.find()
    .then(function(users) {
      res.send(users);
    })
    .catch(function(err) {
      console.error(err);
    });
  }
};