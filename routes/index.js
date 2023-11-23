var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Tourney = require('../models/tourney');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Landing' });
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Landing' });
});



module.exports = router;
