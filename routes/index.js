var express = require('express');
var router = express.Router();
var roles = require(__dirname + '/../models/roles');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Create New Game', roles: roles });
});

module.exports = router;
