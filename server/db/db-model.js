var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  student: String
});

module.exports = mongoose.model('Students', StudentSchema);