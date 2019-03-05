const express = require('express');
const router = express.Router();
const logUpController = require('../../Controllers/user/logUpController');
// const logInController = require('../../Controllers/user/logInController');

router.post('/logup', (req, res) => {
  logUpController.register(req, res);
});

router.get('/logup', (req, res) => {
  res.json({ message: 'metodo get de la URL api-game-start' });
});

module.exports = router;
