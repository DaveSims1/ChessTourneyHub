import express from 'express';
import mongoose from "mongoose";
import { title } from 'node:process';

const app = express();
//Database connection
mongoose.connect("mongodb+srv://David:21CLvDwr97yFkae5@atlascluster.sb92ikf.mongodb.net/chesstourneyhub?retryWrites=true&w=majority");

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', () => {
  console.log('Connected to MongoDB Atlas.... (CLIENT)');
});

//create a model
let tourneyModel = new mongoose.Schema({
    title: String,
    type: String,
    location: String,
    date: String
},
{
    collection: 'tourney'
});

const tourney = mongoose.model("tourney", tourneyModel);


app.get('/tourney', async (req, res) => {
    try {
        const tournaments = await tourney.find({});
        console.log(tournaments);
        res.send(tournaments);
        
    } catch (error) {
        // Handle errors, if any
        console.error('Error fetching data from the database:', error);
        res.status(500).send('Internal Server Error');
    }
});

// app.get('/tourney', (req, res) => {
//     console.log(tourney.find({}));
//     res.send('tourney');
// });

app.listen(3001, () => {
    console.log("run");
});

