const handler = require('../../../application/Handlers/Game/attackHandler');
const adapter = require('../../Adapters/Game/attackAdapter');

exports.attack = async function attack(req, res) {
  const data = req.body;
  const gameOptions = adapter.attack(data);
  const gameState = await handler.attack(gameOptions);
  res.json(gameState);
};
