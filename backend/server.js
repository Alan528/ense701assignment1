const express = require("express");
const connectDB = require('../config/db');
var cors = require('cors');
const server = express();
const articles = require('../routes/api/articles');
const dotenv = require("dotenv")

connectDB();

server.use(cors({ origin: true, credentials: true }));
server.use(express.json({ extended: false }));

dotenv.config();
const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.send("API is running")
})

server.use('/api/articles', articles);

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));

// Step 2:
app.get("*", function (request, response) {

    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));

});

server.listen(PORT, console.log(`server is working and listening on PORT ${PORT}`));