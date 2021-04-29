const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const Bat = require("./modules/batcollection");
const Bowl = require("./modules/bowlingcollection");
const Allrounder = require("./modules/allroundercollection");
const batrouter = require("./router/batting");
const bowlrouter = require("./router/bowling");
const allrounderrouter = require("./router/all_rounder");


app.use(express.json());
app.use(batrouter);
app.use(bowlrouter);
app.use(allrounderrouter);


app.listen(port, ()=> {
    console.log(`connection at ${port} is ready.`);
})
