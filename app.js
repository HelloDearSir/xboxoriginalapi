const express = require("express");

const app = express();
app.use(express.json());
const xboxgames = require('./routers/xboxgames.js')
app.get('/', (req,res) => {
    res.send("Hello World");
})

let posts = [
    { id: 1, title: "post 1"},
    {id:2, title:"posts 2 "}
];
const port = 5000;
app.get("/posts", (req,res) => {
    res.json(posts);
})
app.use(xboxgames);
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})