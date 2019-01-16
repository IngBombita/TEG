const express = require('express');
const router = express.Router();
const controller = require('../../Controllers/game/initialController');

router.get('/start', (req, res) => {
  res.json({ message: 'metodo get de la URL api-game-start' });
});

router.post('/start', controller.startNewGame);

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