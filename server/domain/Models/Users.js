const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const usersSchema = new Schema({
  name: { type: String, required: true, unique: false },
  lastName: { type: String, required: true, unique: false },
  nickName: { type: String, required: true, unique: false },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  session: {
    token: { type: String, required: false },
    timeExpiration: { type: String, required: false },
  },
  stateAccount: {
    verificationToken: { type: String, required: false },
    timeExpiration: { type: Date, required: false },
    isVerificated: { type: Boolean, required: false },
  },
  dateLogUp: { type: Date, required: false },
});

usersSchema.pre('save', function(next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

usersSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const Users = mongoose.model('users', usersSchema);
module.exports = Users;
