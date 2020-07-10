const express = require('express');
const user = require('../controllers/user');
const router = express.Router();
router.get('/login', user.login);
module.exports = router
