const express = require('express');
const router = express.Router();
const initialController = require('../../Controllers/game/initialController');
const attackController = require('../../Controllers/game/attackController');

router.post('/start', initialController.startNewGame);

router.get('/teapot', (req, res) => {
  res.status(418).send("I'm a teapot :)");
});

router.post('/attack', attackController.attack);

module.exports = router;
