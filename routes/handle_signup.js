const express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var userdb = require('./circledb');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res) => {
  user_name = req.body.user.name;
  user_dob = req.body.user.dob;
  user_email = req.body.user.email;
  user_pass = req.body.user.password;
  user_cpass = req.body.user.confirmpass;

  if (user_pass !== user_cpass)
  {
    res.redirect('/signup');
  }else{
    var newUser = new userdb({
      name: user_name,
      dob: user_dob,
      email: user_email,
      pass: user_pass
    });

    newUser.save(function (err, User){
      console.log(err);
    });

    res.redirect('/');
  }

});
module.exports = router;
