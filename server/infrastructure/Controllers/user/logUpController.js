const logUpHandler = require('../../../application/Handlers/User/logUpHandler');
const logUpAdapter = require('../../Adapters/user/logUpAdapter');

exports.register = async function register(req, res) {
  var logUpState;
  try{
    const data = req.body;
    const dataUser = logUpAdapter.register(data);
    logUpState = await logUpHandler.register(dataUser);
  }catch(err){
    res.status(err.returnState);
    res.send(err.returnMessage);
    res.end();
  }
  res.json(logUpState);
  res.end()
};
