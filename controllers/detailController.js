const express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var app = express();

var { Detail } = require("../models/money-detail");

app.use(bodyParser.json());

router.post("/list/:id", (req, res) => {
  Detail.find({ moneyId: req.params.id }, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("No money management data");
      res.status(400).send(err);
    }
  });
});

router.post("/customlist/:id/:index", (req, res) => {
  Detail.find({ $and: [{ moneyId: req.params.id }, { index: req.params.index }] }, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("No money management data");
      res.status(400).send(err);
    }
  });
});

router.post("/create", (req, res) => {
  var detail = new Detail({
    index: "1",
    moneyId: req.body.id,
    events: "",
    date: "",
    currentBank: req.body.bank,
    stake_points: "",
    backLay: "",
    odd: "",
    stake_eur: "",
    profit: "",
    risk: "",
    realProfit: "",
    balance: "",
  });
  detail.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error save data");
    }
  });
});
// Create New Record
router.post("/createNewRecord", (req, res) => {
  var detail = new Detail({
    index: req.body.index1 + 1,
    moneyId: req.body.id,
    events: "",
    date: "",
    currentBank: "€" + req.body.bank,
    stake_points: "",
    backLay: "",
    odd: "0",
    stake_eur: "",
    profit: "",
    risk: "",
    realProfit: "",
    balance: "",
  });
  detail.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error save data");
    }
  });
});
// Update Event
router.put("/updateEvent", (req, res) => {
  var data = {
    events: req.body.events,
  };
  Detail.findOneAndUpdate({ _id: req.body.id }, { $set: data }, { new: true }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in List Update :" + JSON.stringify(err, undefined, 2));
    }
  });
});
// Update Date
router.put("/updateDate", (req, res) => {
  var data = {
    date: req.body.date,
  };
  Detail.findOneAndUpdate({ _id: req.body.id }, { $set: data }, { new: true }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in List Update :" + JSON.stringify(err, undefined, 2));
    }
  });
});
// Update Back/Lay Option
router.put("/updateBackLay", (req, res) => {
  var data = {
    backLay: req.body.backLay,
  };
  Detail.findOneAndUpdate({ _id: req.body.id }, { $set: data }, { new: true }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in List Update :" + JSON.stringify(err, undefined, 2));
    }
  });
});
// Update Stake(Points)
router.put("/updateStakePoints", (req, res) => {
  var data = {
    stake_points: req.body.stake,
  };
  Detail.findOneAndUpdate({ _id: req.body.id }, { $set: data }, { new: true }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in List Update :" + JSON.stringify(err, undefined, 2));
    }
  });
});
// Update Odd
router.put("/updateOdd", (req, res) => {
  var data = {
    odd: req.body.odd,
  };
  Detail.findOneAndUpdate({ _id: req.body.id }, { $set: data }, { new: true }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in List Update :" + JSON.stringify(err, undefined, 2));
    }
  });
});
router.put("/addStakeEur", (req, res) => {
  var data = {
    stake_eur: req.body.stake_eur_value,
    profit: req.body.profit_potential_value,
    risk: req.body.risk_value,
    balance: req.body.balance,
  };
  Detail.findOneAndUpdate({ _id: req.body.id }, { $set: data }, { new: true }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in List Update :" + JSON.stringify(err, undefined, 2));
    }
  });
});
// Update Real Profit
router.put("/updateRealProfit", (req, res) => {
  var data = {
    realProfit: req.body.realProfit,
  };
  Detail.findOneAndUpdate({ _id: req.body.id }, { $set: data }, { new: true }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in List Update :" + JSON.stringify(err, undefined, 2));
    }
  });
});

router.delete("/delete/:id", (req, res) => {
  Detail.findByIdAndRemove({ _id: req.params.id }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in Money delete");
    }
  });
});
module.exports = router;
