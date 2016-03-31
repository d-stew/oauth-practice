var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OAuth Fun!'});
});

router.get('/logout', function(req, res, next){
  res.clearCookie('user');
  console.log('Logged out!');
  res.redirect('/index');
})

module.exports = router;
