let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');



//Connecting to the database model tourney
let Tourney = require('../models/tourney');

//Authentication Function
function requireAuth(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}


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

  router.get('/tournament-edit', requireAuth, async (req, res) => {
    console.log('tourney.js');
    try {
        const items = await Tourney.find();
        console.log(items);
        res.render('tourneyedit.ejs', { items, title: "Tournaments To Edit"}); // Render the EJS view and pass items as a local variable
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  });


//CRUD


//  ADD - GET the Tournament Details page in order to add a new Tournament
router.get('/details', requireAuth, async (req, res, next) => {
    console.log('tourney.js');
    try {
        const items = await Tourney.find();
        res.render('details.ejs', {items, title: "Add Tournament"}); // Render the EJS view and pass items as a local variable
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
});






//ADD POST
router.post('/details', requireAuth, async (req, res, next) => {
    try 
    {
        await Tourney.create(
            
            {
            "title": req.body.title,
            "type": req.body.type,
            "location": req.body.location,
            "date": req.body.date
        });
        res.redirect('/tourney/tournament-edit');
    }
    catch(err)
    {
        console.log(err);
    }
});

//EDIT GET
router.get('/details/:id', requireAuth, async (req, res, next) => {
    let id = req.params.id;
    console.log('tourney.js');
    try { 
            const items = await Tourney.findByIdAndUpdate(
                id,
                {
                    "title": req.body.title,
                    "type": req.body.type,
                    "location": req.body.location,
                    "date": req.body.date
            });
            res.render('../views/details', {title: 'Edit Contact', items: items});
            
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
   
});

//EDIT POST
router.post('/details/:id', requireAuth, async (req, res, next) => {
    let id = req.params.id;
    try { 
        const items = await Tourney.findByIdAndUpdate(
            id,
            {
                "title": req.body.title,
                "type": req.body.type,
                "location": req.body.location,
                "date": req.body.date
        });
        res.redirect('/tourney/tournament-edit');
        
    
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
}
    
});


//DELETE
router.get('/delete/:id', requireAuth, async (req, res, next) => {
    let id = req.params.id;
    //const items = await Contact.find();
    console.log(await Tourney.findById(id));
   
    try 
    {
        await Tourney.findByIdAndDelete(id)
        res.redirect('/tourney/tournament-edit');
    }
    catch(err)
    {
        console.log(err);
    }
    
});
module.exports = router;