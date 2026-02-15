const { Router } = require('express');
const app = Router();
let games = [
    { id: 1, title: "187 Ride of Die", Developers: 'Ubisoft Paris', Publishers:'Ubisoft', Pal: 'Aug 25 2025', JP: 'Unrelased', NA: 'Aug 23 2005', Genre: 'arcade racing'},
    {id: 2, title: '2002 Fifa World Cup', Developers:'EA Canada, Creations, Intelligent Games', Publishers: 'EA Sports(WorldWide), Electronic Arts Sqaure(Japan)', Pal: 'Apr 26 2002', JP:'May 2 2002', Na:'Apr 22 2002', Genre:'Sports'},
    {id: 3, title: '2006 Fifa World Cup', Developers:'EA Canada', Publishers: 'EA Sports', Pal: 'Apr 26 2002', JP:'Unrelased', Na:'Apr 22 2002', Genre:'Sports'},
    {id: 4, title: '25 to Life', Developers:'Avalanche Software Ritual Entertainment', Publishers: 'Eidos Interactive', Pal: 'Unrelased', JP:'Unrelased', Na:'Apr 24 2006', Genre:'Third-person shooter'},
    {id: 5, title:'4x4 Evo 2', Developers: 'Terminal Reality', Publishers:'Gathering Of Developers', Pal:'Jun 5 2002', JP:'Unrelased', Na:'Nov 15 2001'},
    {id:6, title:'50 Cent: bulletpoof', Developers:'', Publisher:'', Pal:'',Jp:'',Na:''},
    {id:7, title:'Advent Rising', Developers:'', Publisher:'', Pal:'',Jp:'',Na:''},
    {id:8, title:'Æon Flux', Developers:'', Publisher:'', Pal:'',Jp:'',Na:''},
      { id: 9, title: "AFL Live 2003", Developers:'', Publishers:' ', Pal: ' ', JP: ' ', NA: ' ', Genre: ' '},
    {id: 10, title: 'AFL Live 2004 ', Developers:' ', Publishers: ' ', Pal: ' ', JP:' ', Na:' ', Genre:' '},
    {id: 11, title: 'AFL Live: Premiership Edition ', Developers:' ', Publishers: ' ', Pal: ' ', JP:' ', Na:' ', Genre:' '},
    {id: 12, title: 'AFL Premiership ', Developers:' ', Publishers: ' ', Pal: ' ', JP:' ', Na:' ', Genre:' '},
 
    
    
];

app.get('/games', (req,res) => {
    res.send(games);
});

//Using the /id so if it will just use 2 or 3 ect 
app.get('/games/:id', (req,res) => {
    const parsedganesId = parseInt(req.params.id);
    if(isNaN(parsedganesId)) {
        return res.status(404).send({msg: 'Bad REquest. Invalid ID.'});
    }
    const findGamesID = games.find(g => g.id === parsedganesId);
    if(!findGamesID) {  
        return res.sendStatus(404);
    }
    res.send(findGamesID);
})
module.exports = app;