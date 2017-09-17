var express = require('express');
var router = express.Router();

var session = require('express-session');

/* GET users listing. */


router.use(session({secret: "Shh, its a secret!"}));

function checkSignin(req, res,next)
{
  if (req.session.user)
  {
    next();
  }else{
    var err = new Error("Not logged in");
    console.log(err);
    next(err);
  }

}

router.get('/', checkSignin, function(req, res, next) {
  res.render('portal');
});

module.exports = router;
