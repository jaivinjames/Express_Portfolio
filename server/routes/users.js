/**
 * Name : Jaivin James
 * Student ID: 301177233
 * Date: 23 October 2021
 * File Name: Express-Portfolio with Authentication
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
