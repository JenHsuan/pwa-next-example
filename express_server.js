const path = require("path");
const express = require("express");
const app = express(); // create express app
const port = process.env.PORT || 8080;

app.use(express.static('out'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "out", "index.html"));
});

// start express server on port 5000
app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});