const { Router } = require("express");
const app = Router();

const Webscrapping = require("../services/gameScraper.js");


// GET ALL GAMES
// /api/games
app.get("/games", async (req, res) => {
    try {
        const games = await Webscrapping();

        res.json(games);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: "Failed to scrape games"
        });
    }
});


// GET GAME BY ID
// /api/games/2
app.get("/games/:id", async (req, res) => {
    try {
        const parsedGamesId = parseInt(req.params.id);

        if (isNaN(parsedGamesId)) {
            return res.status(400).json({
                msg: "Bad Request. Invalid ID."
            });
        }

        const games = await Webscrapping();

        const findGamesID = games.find(
            game => game.id === parsedGamesId
        );

        if (!findGamesID) {
            return res.status(404).json({
                msg: "Game not found"
            });
        }

        res.json(findGamesID);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: "Failed to retrieve game"
        });
    }
});


// GET GAMES BY GENRE
// /api/games/genre/racing
app.get("/games/genre/:genreName", async (req, res) => {
    try {
        const genreName = req.params.genreName.toLowerCase();

        const games = await Webscrapping();

        const filteredGames = games.filter(game =>
            game.genres &&
            game.genres.some(
                genre => genre.toLowerCase() === genreName
            )
        );

        if (filteredGames.length === 0) {
            return res.status(404).json({
                msg: "No games found for this genre"
            });
        }

        res.json(filteredGames);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: "Failed to retrieve games"
        });
    }
});


module.exports = app;