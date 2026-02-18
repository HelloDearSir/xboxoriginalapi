const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
const xboxgames = require('./routers/xboxgames.js')
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'))
})

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; connect-src 'self'  https://xboxoriginalapi-production.up.railway.app"
  );
  next();
});
const port = 5000;
app.get("/posts", (req,res) => {
    res.json(posts);
})
app.use(xboxgames);
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})
 