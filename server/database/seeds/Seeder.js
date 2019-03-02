require('custom-env').env();
const mongoose = require('mongoose');
const usersSeeder = require('./UsersSeeder');
// const attackRouteSeeder = require('./AttackRouteSeeder');
// const provinceCardSeeder = require('./ProvinceCardSeeder');
// const objectiveSeeder = require('./ObjectiveSeeder');

// const dbUrl = 'mongodb://sanfrancisco:5palomas@ds161459.mlab.com:61459/batallas_provincianas';
const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}${
  process.env.DB_HOST
}`;
console.log(dbUrl);

mongoose.connect(
  dbUrl,
  { useNewUrlParser: true },
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('CONECTADO A LA MONGO DB!');

  // provinceCardSeeder(); // --> Ya esta
  // objectiveSeeder();
  // attackRouteSeeder();
  usersSeeder();
});
