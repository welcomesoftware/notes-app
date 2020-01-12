const express = require('express');

// Initialization
const router = express.Router();
const controller = require('../controllers/notes');

// Routes
router.get('/notes', controller.list);


// Exports
module.exports = router;