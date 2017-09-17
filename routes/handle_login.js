var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var userdb = require('./circledb');

var router = express.Router();


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(session({secret: "Shh, its a secret!"}));

/* GET home page. */
router.post('/', function(req, res, next) {

  user_email = req.body.user.email;
  user_pass = req.body.user.pass;

  userdb.find({email:user_email, pass:user_pass}, function(err, response)
  {
    if (response.length <= 0)
      {
        res.redirect('/');
      }else{
        req.session.user = response;
        console.log(req.session);
        res.redirect('/feed');
      }
  });
});

module.exports = router;
