const { Router } = require('express');
const app = Router();
let games = [
    { id: 1, title: "187 Ride of Die", Developers: 'Ubisoft Paris', Publishers:'Ubisoft', Pal: 'Aug 25 2025', JP: 'Unrelased', NA: 'Aug 23 2005'},
    
];

app.get('/games', (req,res) => {
    res.send(games);
});

module.exports = app;