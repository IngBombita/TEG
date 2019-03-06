const express = require('express');
const router = express.Router();
const logUpController = require('../../Controllers/user/logUpController');
// const logInController = require('../../Controllers/user/logInController');

router.post('/logup', (req, res) => {
  logUpController.register(req, res);
});

module.exports = router;
