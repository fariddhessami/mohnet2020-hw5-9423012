var express = require('express');
var router = express.Router();
//faraidy : hmmm...

// Define the home page route
router.get('/', function(req, res) {
    res.send('home page');
});

// Define the about route
router.get('/about', function(req, res) {
    res.send('About us');
});

module.exports = router;