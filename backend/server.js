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

server.listen(PORT, console.log(`server is working and listening on PORT ${PORT}`));

if (process.env.NODE_ENV === "production") {
    server.use(express.static("frontend/build"));
  }
  
  server.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "frontend/build", "index.html"));
  });