const mongoose = require("mongoose");

var Detail = mongoose.model("Detail", {
  index: { type: String },
  moneyId: { type: String },
  events: { type: String },
  date: { type: String },
  currentBank: { type: String },
  stake_points: { type: String },
  backLay: { type: String },
  odd: { type: String },
  stake_eur: { type: String },
  profit: { type: String },
  risk: { type: String },
  realProfit: { type: String },
  balance: { type: String },
});

module.exports = { Detail };
