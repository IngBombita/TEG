const validation = require('../../../application/Validators/Game/initialValidator');
const handler = require('../../../application/Handlers/Game/startNewGame');

exports.startNewGame = function start(req, res) {
  const data = req.body;
  const gameState = validation.initialValidator(data);
  res.json(JSON.stringify(handler.start(gameState)));
};
