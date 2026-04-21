const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let opportunities = [];

setInterval(() => {
    opportunities = [
        {
            path: "USDC → WETH → DAI → USDC",
            profit: (Math.random() * 10).toFixed(2),
            score: (Math.random() * 20).toFixed(1)
        }
    ];
}, 1000);

app.get("/opportunities", (req, res) => {
    res.json(opportunities);
});

app.listen(3001, () => console.log("Bot running"));
