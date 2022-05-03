const express = require("express");
const connectDB = require('../config/db');
var cors = require('cors');
const server = express();
const dotenv = require("dotenv")

connectDB();

server.use(cors({ origin: true, credentials: true }));

dotenv.config();
const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.send("API is running")
})

server.listen(PORT, console.log(`server is working and listening on PORT ${PORT}`));