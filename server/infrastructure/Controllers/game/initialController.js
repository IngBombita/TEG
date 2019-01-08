const handler = require('../../../application/Handlers/Game/startNewGame');

exports.startNewGame = async function start(req, res) {
  const data = req.body;
  res.json(await handler.start(data));
};
