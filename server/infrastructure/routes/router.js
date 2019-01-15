const express = require('express');
const router = express.Router();
const gameRoutes = require('./game/routes');
const roomRoutes = require('./room/routes');
const lobbyRoutes = require('./lobby/routes');

router.use((err, req, res, next) => {
  if (err) res.send(err);
  next();
});
router.use('/game', gameRoutes);
router.use('/room', roomRoutes);
router.use('/lobby', lobbyRoutes);

module.exports = router;
