var express = require('express');
var router = express.Router();

var roles = require(__dirname + '/../lib/roles');
var generateUnique = require(__dirname + '/../lib/helpers').generateUnique;

var games = [];
var gameIds = [];

router.get('/', function(req, res, next) {
    res.render('create', { title: 'Create New Game', roles: roles });
});

router.post('/', function(req, res, next) {
  var game = {
    id: generateUnique(),
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
  gameIds.push(game.id);

  console.log(game);

  res.render('game', { title: game.name, game: game });
});

module.exports = router;
