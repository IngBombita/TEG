const randToken = require('rand-token');
const UserModel = require('../Models/Users');

exports.exploreUsers = async emailUser => {
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
    if (err) throw err;
  });

  return newUser;
};
