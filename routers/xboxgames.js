const { Router } = require('express');
const app = Router();
let games = [
    { id: 1, title: "187 Ride of Die", Developers: 'Ubisoft Paris', Publishers: 'Ubisoft', Pal: 'Aug 25 2025', JP: 'Unrelased', NA: 'Aug 23 2005', Genre: 'arcade racing' },
    { id: 2, title: '2002 Fifa World Cup', Developers: 'EA Canada, Creations, Intelligent Games', Publishers: 'EA Sports(WorldWide), Electronic Arts Sqaure(Japan)', Pal: 'Apr 26 2002', JP: 'May 2 2002', Na: 'Apr 22 2002', Genre: 'Sports' },
    { id: 3, title: '2006 Fifa World Cup', Developers: 'EA Canada', Publishers: 'EA Sports', Pal: 'Apr 26 2002', JP: 'Unrelased', Na: 'Apr 22 2002', Genre: 'Sports' },
    { id: 4, title: '25 to Life', Developers: 'Avalanche Software Ritual Entertainment', Publishers: 'Eidos Interactive', Pal: 'Unrelased', JP: 'Unrelased', Na: 'Apr 24 2006', Genre: 'Third-person shooter' },
    { id: 5, title: '4x4 Evo 2', Developers: 'Terminal Reality', Publishers: 'Gathering Of Developers', Pal: 'Jun 5 2002', JP: 'Unrelased', Na: 'Nov 15 2001', Genre: 'racing simulation' },
    { id: 6, title: "50 Cent: Bulletproof", Developers: "Genuine Games", Publishers: "Vivendi Universal Games", Pal: "Nov 25, 2005", JP: "Unreleased", NA: "Nov 17, 2005", Genre: 'Third-person shooter' },
    { id: 7, title: "Advent Rising", Developers: "GlyphX Games", Publishers: "Majesco Entertainment", Pal: "Feb 17, 2006", JP: "Unreleased", NA: "May 31, 2005", Genre: 'Action-adventure' },
    { id: 8, title: "Æon Flux", Developers: "Terminal Reality", Publishers: "Majesco Entertainment", Pal: "Mar 30, 2006AUS Mar 31, 2006", JP: "Unreleased", NA: "Nov 15, 2005", Genre: 'science-fiction' },
    { id: 9, title: "AFL Live 2003", Developers: "IR Gurus", Publishers: "Acclaim Sports", Pal: "Sep 5, 2002AUS", JP: "Unreleased", NA: "Unreleased", Genre: 'sports simulation' },
    { id: 10, title: "AFL Live 2004", Developers: "IR Gurus", Publishers: "Acclaim Entertainment", Pal: "Aug 28, 2003AUS", JP: "Unreleased", NA: "Unreleased", Genre: 'sports simulation' },
    { id: 11, title: "AFL Live: Premiership Edition", Developers: "IR Gurus", Publishers: "Acclaim Entertainment THQ", Pal: "Apr 29, 2004AUS", JP: "Unreleased", NA: "Unreleased", Genre: 'sports simulation' },
    { id: 12, title: "AFL Premiership", Developers: "IR Gurus", Publishers: "THQ", Pal: "Sep 22, 2005", JP: "Unreleased", NA: "Unreleased", Genre: 'sports simulation' },
    { id: 13, title: "Aggressive Inline", Developers: "Z-Axis", Publishers: "AKA Acclaim", Pal: "Aug 23, 2002", JP: "Unreleased", NA: "Aug 1, 2002", Genre: 'sports simulation' },
    { id: 14, title: "AirForce Delta StormDeadly Skies (PAL)Airforce Delta II (JP)", Developers: "Konami Computer Entertainment Studios", Publishers: "Konami", Pal: "Apr 12, 2002", JP: "Feb 22, 2002", NA: "Nov 15, 2001", Genre: 'combat flight simulation' },
    { id: 15, title: "Alias", Developers: "Acclaim Studios Cheltenham", Publishers: "Acclaim Entertainment", Pal: "Apr 8, 2004", JP: "Unreleased", NA: "Apr 6, 2004", Genre: '3D third-person action-adventure/stealth video game' },
    { id: 16, title: "Alien Hominid", Developers: "The Behemoth", Publishers: "Zoo Digital Publishing", Pal: "May 27, 2005", JP: "Unreleased", NA: "Unreleased", Genre: 'Run and gun' },
    { id: 17, title: "Aliens Versus Predator: Extinction", Developers: "Zono", Publishers: "Electronic Arts", Pal: "Aug 8, 2003", JP: "Unreleased", NA: "Aug 5, 2003", Genre: 'Real-time strategy' },
    { id: 18, title: "All-Star Baseball 2003", Developers: "Acclaim Studios Austin", Publishers: "Acclaim Sports", Pal: "May 31, 2002", JP: "Aug 8, 2002", NA: "Mar 7, 2002", Genre: 'Sports game' },
    { id: 19, title: "All-Star Baseball 2004", Developers: "Acclaim Studios Austin", Publishers: "Acclaim Sports", Pal: "Unreleased", JP: "Unreleased", NA: "Feb 28, 2003", Genre: 'Sports game' },
    { id: 20, title: "All-Star Baseball 2005", Developers: "Acclaim Studios Austin", Publishers: "Acclaim Entertainment", Pal: "Unreleased", JP: "Unreleased", NA: "Mar 23, 2004", Genre: 'Sports game' },
    { id: 21, title: "Alter Echo", Developers: "Outrage Games", Publishers: "THQ", Pal: "Sep 12, 2003AUS Oct 3, 2003EU", JP: "Unreleased", NA: "Aug 18, 2003", Genre: 'Action-adventure' },
    { id: 22, title: "America's Army: Rise of a Soldier", Developers: "Secret Level, Inc.", Publishers: "Ubisoft", Pal: "Feb 24, 2006", JP: "Unreleased", NA: "Nov 15, 2005", Genre: 'FPS' },
    { id: 23, title: "American Chopper", Developers: "Creat Studios", Publishers: "Activision", Pal: "Nov 23, 2004", JP: "Unreleased", NA: "Nov 23, 2004", Genre: 'racing/simulation' },
    { id: 24, title: "American Chopper 2: Full Throttle", Developers: "Creat Studios", Publishers: "Activision", Pal: "Nov 16, 2005", JP: "Unreleased", NA: "Nov 16, 2005", Genre: 'racing/simulation' },
    { id: 25, title: "AMF Bowling 2004", Developers: "Black Market Games", Publishers: "Mud Duck Productions", Pal: "Unreleased", JP: "Unreleased", NA: "Dec 1, 2003", Genre: 'Bowling' },
    { id: 26, title: "AMF Xtreme Bowling", Developers: "Atomic Planet Entertainment", Publishers: "Mud Duck Productions", Pal: "Unreleased", JP: "Unreleased", NA: "Jun 28, 2006", Genre: 'Bowling' },
    { id: 27, title: "Amped: Freestyle Snowboarding", Developers: "Indie Built", Publishers: "Microsoft Game Studios", Pal: "Mar 14, 2002", JP: "Feb 22, 2002", NA: "Nov 20, 2001", Genre: 'Snowboarding' },
    { id: 28, title: "Amped 2", Developers: "Indie Built", Publishers: "Microsoft Game Studios", Pal: "Nov 14, 2003", JP: "Feb 26, 2004", NA: "Oct 28, 2003", Genre: 'Snowboarding' },
    { id: 29, title: "AND 1 Streetball", Developers: "Black Ops Entertainment", Publishers: "Ubisoft", Pal: "Aug 31, 2006AUS Sep 1, 2006EU", JP: "Unreleased", NA: "Jun 6, 2006", Genre: 'Sports, Basketball' },
    { id: 30, title: "Angelic Concert", Developers: "Success", Publishers: "Success", Pal: "Unreleased", JP: "Mar 13, 2003", NA: "Unreleased", Genre: 'Visual novel' },
    { id: 31, title: "Animaniacs: The Great Edgar Hunt", Developers: "Warthog Games", Publishers: "Ignition Entertainment", Pal: "Oct 14, 2005", JP: "Unreleased", NA: "Unreleased", Genre:'Action-adventure' },
    { id: 32, title: "Antz Extreme Racing", Developers: "Supersonic Software", Publishers: "Empire Interactive", Pal: "Jul 26, 2002", JP: "Unreleased", NA: "Sep 5, 2002", Genre:'Racing' },
    { id: 33, title: "Aoi Namida", Developers: "Artlim Media", Publishers: "Panther Software", Pal: "Unreleased", JP: "May 27, 2004", NA: "Unreleased", Genre:'Visual novel' },
    { id: 34, title: "APEXRacing Evoluzione (PAL)", Developers: "Milestone", Publishers: "Infogrames", Pal: "Feb 28, 2003", JP: "Unreleased", NA: "Feb 18, 2003", Genre:'Racing' },
    { id: 35, title: "Aquaman: Battle for Atlantis", Developers: "Lucky Chicken Games", Publishers: "TDK Mediactive", Pal: "Unreleased", JP: "Unreleased", NA: "Jul 30, 2003", Genre:'Action-adventure' },
    { id: 36, title: "Arctic Thunder", Developers: "Inland Productions", Publishers: "Midway", Pal: "Mar 22, 2002", JP: "Unreleased", NA: "Nov 15, 2001", Genre:'Racing' },
    { id: 37, title: "Area 51", Developers: "Midway Studios Austin", Publishers: "Midway", Pal: "May 26, 2005AUS May 27, 2005EU", JP: "Unreleased", NA: "Apr 25, 2005", Genre:'First-person shooter' },
    { id: 38, title: "Arena Football", Developers: "EA Tiburon", Publishers: "EA Sports", Pal: "Unreleased", JP: "Unreleased", NA: "Feb 7, 2006", Genre:'Sports' },
    { id: 39, title: "Armed and Dangerous", Developers: "Planet Moon Studios", Publishers: "LucasArts", Pal: "Feb 27, 2004", JP: "Unreleased", NA: "Dec 2, 2003",Genre:'First-person shooter, third-person shooter' },
    { id: 40, title: "Army Men: Major Malfunction", Developers: "Team17", Publishers: "Global Star Software", Pal: "Aug 4, 2006", JP: "Unreleased", NA: "Apr 11, 2006", Genre:'third-person shooter' },
    { id: 41, title: "Army Men: Sarge's War", Developers: "Tactical Development", Publishers: "Global Star Software", Pal: "Jul 23, 2004", JP: "Unreleased", NA: "Aug 2, 2004", Genre:'third-person shooter' },
    { id: 42, title: "Arx Fatalis", Developers: "Wizarbox", Publishers: "DreamCatcher Interactive NA Mindscape PAL", Pal: "Feb 13, 2004UK", JP: "Unreleased", NA: "Dec 22, 2003", Genre:'Action role-playing, dungeon craw' },
    { id: 43, title: "Atari Anthology", Developers: "Digital Eclipse", Publishers: "Atari Interactive", Pal: "Nov 26, 2004", JP: "Aug 4, 2005", NA: "Nov 16, 2004", Genre:'Various' },
    { id: 44, title: "ATV: Quad Power Racing 2", Developers: "Climax Brighton", Publishers: "AKA Acclaim", Pal: "Feb 28, 2003", JP: "Unreleased", NA: "Jan 22, 2003", Genre:'Racing' },
    { id: 45, title: "Auto Modellista", Developers: "Capcom Production Studio 1", Publishers: "Capcom", Pal: "Unreleased", JP: "Jan 29, 2004", NA: "Jan 20, 2004", Genre: 'Arcade style racing' },
    { id: 46, title: "Avatar: The Last Airbender", Developers: "THQ Studio Australia", Publishers: "THQ", Pal: "Unreleased", JP: "Unreleased", NA: "Oct 10, 2006", Genre:'Action-adventure, action role-playing' },
    { id: 47, title: "Azurik: Rise of Perathia", Developers: "Adrenium Games", Publishers: "Microsoft Game Studios", Pal: "May 17, 2002", JP: "Unreleased", NA: "Nov 27, 2001", Genre:'Action-adventure' },

];

app.get('/games', (req, res) => {
    res.send(games);
});

//Using the /id so if it will just use 2 or 3 ect 
app.get('/games/:id', (req, res) => {
    const parsedganesId = parseInt(req.params.id);
    if (isNaN(parsedganesId)) {
        return res.status(404).send({ msg: 'Bad REquest. Invalid ID.' });
    }
    const findGamesID = games.find(g => g.id === parsedganesId);
    if (!findGamesID) {
        return res.sendStatus(404);
    }
    res.send(findGamesID);
})
module.exports = app;