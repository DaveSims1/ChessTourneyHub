let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connecting to the database model tourney
let Tourney = require('../models/tourney');


router.get('/tournaments', async (req, res) => {
    console.log('tourney.js');
    try {
        const items = await Tourney.find();
        console.log(items);
        res.render('tourney.ejs', { items, title: "Tournaments"}); // Render the EJS view and pass items as a local variable
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  });


module.exports = router;