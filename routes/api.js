var express = require('express');
var router = express.Router();
var applications = import('./../api/applications');
const os = require('os');
const tasklist = require('tasklist');

router.get('/netflix', function(req, res, next) {
    res.send(os.cpus());
});

module.exports = router;
