const express = require('express');
const router = express.Router();
const controller = require('../../Controllers/game/initialController');

router.post('/start', controller.startNewGame);

module.exports = router;
