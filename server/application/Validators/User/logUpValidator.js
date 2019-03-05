const userRepository = require('../../../domain/Repositories/UserRepository');

exports.run = async function validate(dataUser) {
  const isExistingEmail = await userRepository.exploreUsers(dataUser.email);
  if (isExistingEmail) throw new Error('El email ya esta en uso');
};
