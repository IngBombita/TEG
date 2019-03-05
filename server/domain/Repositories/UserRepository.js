const UserModel = require('../Models/Users');

exports.exploreUsers = async emailUser => {
  const query = UserModel.find(
    {
      email: emailUser,
    },
    { _id: 1 },
  );
  const data = await query.exec();
  if (data) return true;
  return false;
};

exports.registerUser = async dataUser => {
  // create a user a new user
  const newUser = new UserModel({
    name: dataUser.name,
    lastName: dataUser.lastName,
    nickName: dataUser.nickName,
    password: dataUser.password,
    email: dataUser.email,
    token: dataUser.token,
    timeToken: dataUser.timeToken,
    dateLogUp: dataUser.dateLogUp,
  });

  // save user to database
  newUser.save(err => {
    if (err) throw err;
  });

  return newUser;
};
