const userValidator = require('../../Validators/User/logUpValidator');
const userRepository = require('../../../domain/Repositories/UserRepository');

exports.register = async function register(dataUser) {
  await userValidator.run(dataUser);
  const newUser = userRepository.registerUser(dataUser);
  return newUser;
};
