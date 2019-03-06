const logUpHandler = require('../../../application/Handlers/User/logUpHandler');
const logUpAdapter = require('../../Adapters/user/logUpAdapter');
const emailService = require('../../middlewares/ emailService');

exports.register = async function register(req, res) {
  let logUpState;
  let data;
  try {
    data = req.body;
    const dataUser = logUpAdapter.register(data);
    logUpState = await logUpHandler.register(dataUser);

    if (logUpState) {
      const token = logUpState.stateAccount.verificationToken;
      await emailService.SendVerificationEmail(data.email, token);
    }
  } catch (err) {
    res.status(err.returnState);
    res.send(err.returnMessage);
    res.end();
  }
  res.status(200);
  res.end();
};
