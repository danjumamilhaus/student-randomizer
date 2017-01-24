var Student = require('./db-model.js');
var seed = require('./seed.js');

Student.collection.insertMany(seed);

exports.getRandomStudent = function(req, res, next) {
  Student.find()
    .limit(-1)
    .skip(Math.floor(Math.random() * 30) + 1);
    .next(function(user) {
      console.log(user);
      res.send(user);
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