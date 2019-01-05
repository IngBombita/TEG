require('custom-env').env();
const mongoose = require('mongoose');
const attackRouteSeeder = require('./AttackRouteSeeder');

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

  // provinceCardSeeder(); --> Ya esta
  attackRouteSeeder();
});
