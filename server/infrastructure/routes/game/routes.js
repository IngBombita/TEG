const express = require('express');
const router = express.Router();
const initialController = require('../../Controllers/game/initialController');
const attackController = require('../../Controllers/game/attackController');

router.post('/start', initialController.startNewGame);
router.get('/start', (req, res) => {
  res.json({ message: 'metodo get de la URL api-game-start' });
});
router.get('/teapot', (req, res) => {
  res.status(418).send("I'm a teapot :)");
});

router.post('/attack', attackController.attack);

module.exports = router;

/*
cuerpo del mensaje post

{
	"players": [0,1,2],
	"roundOrder": [],
	"provinceCardsDeck": [],
	"roundNumber": 1
}
*/