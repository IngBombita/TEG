const logUpHandler = require('../../../application/Handlers/User/logUpHandler');
const logUpAdapter = require('../../Adapters/user/logUpAdapter');

exports.register = async function register(req, res) {
  const data = req.body;
  const dataUser = logUpAdapter.register(data);
  const logUpState = await logUpHandler.register(dataUser);
  res.json(logUpState);
};
