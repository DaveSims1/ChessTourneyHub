let mongoose = require('mongoose');

//create a model
let tourneyModel = mongoose.Schema({
    title: String,
    type: String,
    location: String,
    date: String
},
{
    collection: "tourney"
});

module.exports = mongoose.model('tourney', tourneyModel);