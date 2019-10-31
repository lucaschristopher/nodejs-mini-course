const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Initializing the App
const app = express();

// Permits to send data to the app in JSON format
app.use(express.json());

// Permits CORS to all domains (because it has no parameters)
app.use(cors());

// Initializing the DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/models");

// Routes
// This "use" method is like a wildcard. It will receive every kind of request (GET, POST, etc.).
// Every time we receive a request, we will forward it to our file "./src/routes".
app.use("/api", require("./src/routes"));

app.listen(3001);