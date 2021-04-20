const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var path = require("path");
var app = express();

require("./config/config");
require("./models/db");

// middleware
app.use(bodyParser.json());

// error handler
app.use((err, req, res, next) => {
  if (err.name == "ValidationError") {
    var valErrors = [];
    Object.keys(err.errors).forEach((key) => valErrors.push(err.errors[key].message));
    res.status(422).send(valErrors);
  }
});

// Cors For HTTP
app.use(cors());
// Run frontend static files
app.use(express.static(path.join(__dirname, "public")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT, () => console.log(`Server started at port: ${process.env.PORT}`));

var moneyController = require("./controllers/moneyController");
var detailController = require("./controllers/detailController");
app.use("/api/moneys", moneyController);
app.use("/api/details", detailController);
