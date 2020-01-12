const express = require('express');

// Initialization
const router = express.Router();
const controler = require('../controllers/index');

// Routes
router.get('/', controler.index);

// Exports
module.exports = router;