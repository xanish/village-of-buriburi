var express = require('express');
var router = express.Router();
var roles = require(__dirname + '/../models/roles');

router.get('/', function(req, res, next) {
    res.render('create', { title: 'Create New Game', roles: roles });
});

router.post('/', function(req, res, next) {
  res.render('game', { title: 'Game', roles: roles });
});

module.exports = router;
