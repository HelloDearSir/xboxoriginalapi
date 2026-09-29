const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://www.ogxbox.co.uk/game-list/view-game-list";

async function Webscrapping() {
    try {
        const response = await axios.get(url);

        const html = response.data;
        const $ = cheerio.load(html);

        // Find the table
        const targetTable = $(".game-table.table.table-bordered");

        if (targetTable.length === 0) {
            console.log("No table with the specified class found.");
            return null;
        }

        // Don't include .section-header
        targetTable.find(".section-header").remove();

        const data = [];

        targetTable.find("tr").each((index, tr) => {
            const rows = [];

            $(tr).find("td").each((i, cell) => {
                rows.push($(cell).text().trim());
            });

            if (rows.length > 0) {
                data.push({
                    id: data.length + 1,
                    game: rows[0],
                    developer: rows[1],
                    publisher: rows[2],
                    status: rows[4],
                    otherDate: rows[5]
                });
            }
        });

        

  console.log("Games:", data);

        // Give the data back to xboxgames.js
        return  data;

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

module.exports = Webscrapping;