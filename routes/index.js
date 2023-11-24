var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Tourney = require('../models/tourney');
let indexController = require('../controllers/index');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Landing' });
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Landing' });
});

//router to get login display
router.get('/login', indexController.displayLoginPage);
//router to get login process
router.post('/login', indexController.processLoginPage);

//router for register display
router.get('/register', indexController.displayRegisterPage);

//router for register process
router.post('/register', indexController.processRegisterPage);

//logout
router.get('/logout', indexController.performLogout);


module.exports = router;
