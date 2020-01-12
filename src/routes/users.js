const express = require('express');

// Initialization
const router = express.Router();
const controller = require('../controllers/users');

// Routes
router.get('/users/signin', controller.signin);
router.get('/users/signup', controller.signup);

// Exports
module.exports = router;