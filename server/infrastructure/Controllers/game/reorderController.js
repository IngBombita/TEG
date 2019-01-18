const handler = require('../../../application/Handlers/Game/reorderHandler');
const adapter = require('../../Adapters/Game/reorderAdapter');

exports.reorder = async function reorder(req, res) {
  const data = req.body;

  try {
    const gameOptions = adapter.reorder(data);
    const gameState = await handler.reorder(gameOptions);
    res.json(gameState);
  } catch (error) {
    console.log(`Error!: ${error}`);
    console.log(error);
    res.status(400).end();
  }
};
