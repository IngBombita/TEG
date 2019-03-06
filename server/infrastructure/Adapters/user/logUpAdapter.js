const avj = require('../../Schemas');
const newUserScheam = require('../../Schemas/newUserSchema.json');
const bodyError = require('../../Errors/user/userErrors').JsonBodyInvalid;

const validate = avj.compile(newUserScheam);

exports.register = function start(data) {
  const isReqBodyValid = validate(data);

  if (!isReqBodyValid) {
    throw bodyError;
  }
  return data;
};
