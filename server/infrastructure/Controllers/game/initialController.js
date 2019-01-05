const handler = require('../../../application/Handlers/Game/startNewGame');

exports.startNewGame = function start(req, res) {
  const data = req.body;
  res.json(handler.start(data));
};
