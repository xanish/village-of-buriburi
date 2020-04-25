var express = require('express');
var router = express.Router();
var roles = require(__dirname + '/../models/roles');
var games = [];

router.get('/', function(req, res, next) {
    res.render('create', { title: 'Create New Game', roles: roles });
});

router.post('/', function(req, res, next) {
  var game = {
    name: req.body.username + '\'s Lobby',
    roles: {
      villagers: req.body.countOfVillager,
      doctors: req.body.countOfDoctor,
      cops: req.body.countOfCop,
      mafia: req.body.countOfMafia,
    },
    players: [{
      name: req.body.username,
      owner: true,
    }],
    created: Date.now()
  };
  games.push(game);
  res.render('game', { title: game.name, game: game });
});



module.exports = router;
