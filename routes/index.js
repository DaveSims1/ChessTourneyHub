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

/* GET Database Page page. */
// router.get('/tournaments', function(req, res, next) {
//   res.render('tournaments', { title: 'Tournaments' });
// });
// router.get('/tournaments', async (req, res) => {
//   console.log('tourney.js');
//   try {
//       const items = await Tourney.find();
//       console.log(items);
//       res.render('tourney.ejs', { items, title: "Tournaments"}); // Render the EJS view and pass items as a local variable
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


module.exports = router;
