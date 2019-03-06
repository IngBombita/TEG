const userRepository = require('../../../domain/Repositories/UserRepository');
const {
  EmailAlreadyExists,
} = require('../../../infrastructure/Errors/user/userErrors');

exports.run = async function validate(dataUser) {
  const isExistingEmail = await userRepository.exploreUsers(dataUser.email);
  if (isExistingEmail) throw EmailAlreadyExists;
};
