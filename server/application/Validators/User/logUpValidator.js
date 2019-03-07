const userRepository = require('../../../domain/Repositories/UserRepository');
const error = require('../../../infrastructure/Errors/user/userErrors');

exports.run = async function validate(dataUser) {
  const isExistingEmail = await userRepository.verificateEmail(dataUser.email);
  const isExistingNickName = await userRepository.verificateNickName(
    dataUser.nickName,
  );
  if (isExistingEmail) throw error.EmailAlreadyExist;
  if (isExistingNickName) throw error.NickNameAlreadyExist;
};
