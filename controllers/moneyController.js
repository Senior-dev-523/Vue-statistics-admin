const express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var app = express();

var { Money } = require("../models/money");

app.use(bodyParser.json());

router.post("/list", (req, res) => {
  Money.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("No money management data");
      res.status(400).send(err);
    }
  });
});

router.post("/list/:id", (req, res) => {
  Money.find({ _id: req.params.id }, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("No money management data");
      res.status(400).send(err);
    }
  });
});

router.post("/searchName/:name", (req, res) => {
  Money.find({ name: req.params.name }, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("No money management data");
      res.status(400).send(err);
    }
  });
});

router.post("/create", (req, res) => {
  var money = new Money({
    name: req.body.name,
    startingBank: "€" + req.body.startingBank,
    targetProfit: req.body.targetProfit + "%",
    stopLoss: req.body.stopLoss + "%",
  });
  money.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error save data");
    }
  });
});

router.delete("/:id", (req, res) => {
  Money.findByIdAndRemove({ _id: req.params.id }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in Money delete");
    }
  });
});

module.exports = router;
