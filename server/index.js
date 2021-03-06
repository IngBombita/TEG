/* eslint consistent-return:0 import/order:0 */
require('custom-env').env();

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const gameApi = require('./infrastructure/routes/router');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
app.use('/api', gameApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Set up mongoose connection
// eslint-disable-next-line prettier/prettier
const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_HOST}`;

mongoose.connect(
  dbUrl,
  { useNewUrlParser: true },
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('CONECTADO A LA MONGO DB!');
});

// Start your app.
app.listen(port, host, async err => {
  // Set up mongoose connection
  // eslint-disable-next-line prettier/prettier
  const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_HOST}`;

  mongoose.connect(
    dbUrl,
    { useNewUrlParser: true },
  );

  const db = mongoose.connection;
  db.on('error', error => logger.error(error.message));

  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
