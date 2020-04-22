var express = require('express');
var router = express.Router();
var roles = require(__dirname + '/../models/roles');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create', function(req, res, next) {
  res.render('create', { title: req.body.username + '\'s Game', roles: roles });
});

module.exports = router;
