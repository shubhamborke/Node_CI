const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.port || 3000;

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`Hello ${req.query.name || "Server"}!`);
});

app.get("/health", (req, res) => {
    res.send("Server Health Ok!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
