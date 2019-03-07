const randToken = require('rand-token');
const UserModel = require('../Models/Users');
const errorSave = require('../../infrastructure/Errors/user/userErrors')
  .ErrorSaving;
const errorDelete = require('../../infrastructure/Errors/user/userErrors')
  .ErrorDeleting;

exports.verificateEmail = async emailUser => {
  const query = UserModel.find(
    {
      email: emailUser,
    },
    { _id: 1 },
  );
  const data = await query.exec();
  if (data.length !== 0) return true;
  return false;
};

exports.verificateNickName = async nicknameUser => {
  const query = UserModel.find(
    {
      nickName: nicknameUser,
    },
    { _id: 1 },
  );
  const data = await query.exec();
  if (data.length !== 0) return true;
  return false;
};

exports.registerUser = async dataUser => {
  const day = new Date();
  // create a user a new user
  const newUser = new UserModel({
    name: dataUser.name,
    lastName: dataUser.lastName,
    nickName: dataUser.nickName,
    password: dataUser.password,
    email: dataUser.email,
    session: {
      token: '',
      timeExpiration: '',
    },
    stateAccount: {
      verificationToken: randToken.generate(32),
      timeExpiration: day.setDate(day.getDate() + 1),
      isVerificated: false,
    },
    dateLogUp: Date.now(),
  });

  // save user to database
  newUser.save(err => {
    if (err) throw errorSave;
  });

  return newUser;
};

exports.deleteUser = async email => {
  UserModel.remove(email, err => {
    if (err) {
      throw errorDelete;
    }
  });
};

exports.verificateTokenLogUp = async () => {
  const query = UserModel.find(
    {
      name: 'nico',
      // stateAccount: {
      // verificated: false,
      // $where: this.timeExpiration < Date.now(),
      // },
    },
    { email: 1 },
  );
  const data = await query.exec();
  console.log(data);
};
