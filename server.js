const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
// const db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory

if (process.env.NODE_ENV === "production") {
  app.use(express.static("nyt-search-react/build"));
}

else {
app.use(express.static("public"));
}

// require('./routes')(app);
const api_routes = require('./routes/api');
app.use(api_routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./nyt-search-react/public/index.html"));
});

// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost:27017/scrapeAndComment");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/nytreact";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

// Start the server
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}!`);
  });
  