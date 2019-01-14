const handler = require('../../../application/Handlers/Game/startNewGame');
const adapter = require('../../Adapters/Game/newGameAdapter');

exports.startNewGame = async function start(req, res) {
  const data = req.body;
  const gameOptions = adapter.startNewGame(data);
  const gameState = await handler.start(gameOptions);
  res.json(gameState);
};
