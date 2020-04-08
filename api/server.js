  
const express = require("express");
const expressRouter = require("../data/db-router");



server = express();
server.use(express.json());
server.use("/api/posts", expressRouter);
server.get('/', (req, res)=>{
    res.send("receiving data");
});

module.exports = server;