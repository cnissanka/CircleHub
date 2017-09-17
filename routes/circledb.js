
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/circlehub');


var User = mongoose.Schema({
  name: String,
  dob: String,
  email: String,
  pass: String
});



var User = mongoose.model("User", User);

module.exports = User;
