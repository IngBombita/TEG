const express = require('express');
const router = express.Router();
const gameRoutes = require('./game/routes');
const roomRoutes = require('./room/routes');
const lobbyRoutes = require('./lobby/routes');

router.get('/game', gameRoutes);
router.get('/room', roomRoutes);
router.get('/lobby', lobbyRoutes);

module.exports = router;
