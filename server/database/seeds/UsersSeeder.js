const User = require('../../domain/Models/Users');
/*
const seed = () => {
  model.insertMany(
    [
      {
        name: 'Alejandro',
        lastName: 'Minacori',
        nickName: 'Cayman',
        password: '1234',
        email: 'alejandrominacori@gmail.com',
        token: 'aaadddd',
        timeToken: '124123623123',
        dateLogUp: '28/02/2018',
      },
      {
        name: 'Eduardo',
        lastName: 'Minacori',
        nickName: 'Salvador',
        password: '1234',
        email: 'eduardominacori@gmail.com',
        token: 'sasd',
        timeToken: '123123123123',
        dateLogUp: 'hoy',
      },
    ],
    error => {
      console.log(`No funca el seed------->  ${error}`);
    },
  );
};
*/

const seed = () => {
  // create a user a new user
  const testUser = new User({
    name: 'Alejandro',
    lastName: 'Minacori',
    nickName: 'Cayman',
    password: '1234',
    email: 'alejandrominacori@gmail.com',
    token: 'aaadddd',
    timeToken: '124123623123',
    dateLogUp: '28/02/2018',
  });

  // save user to database
  testUser.save(err => {
    if (err) throw err;

    // fetch user and test password verification
    User.findOne({ name: 'Alejandro' }, (err, user) => {
      if (err) throw err;

      // test a matching password
      user.comparePassword('1234', (err, isMatch) => {
        if (err) throw err;
        console.log('1234:', isMatch); // -> Password123: true
      });

      // test a failing password
      user.comparePassword('1234e', (err, isMatch) => {
        if (err) throw err;
        console.log('1234e:', isMatch); // -> 123Password: false
      });
    });
  });
};

module.exports = seed;
