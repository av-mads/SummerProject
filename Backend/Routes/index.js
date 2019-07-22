    
var express = require('express')
const router = express.Router();

// Register routes
var posts = require('./matches.js');

// Use Routes
router.use('/matches', posts);

module.exports = router;