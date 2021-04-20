const mongoose = require("mongoose");

var Money = mongoose.model("Money", {
  name: { type: String },
  startingBank: { type: String },
  targetProfit: { type: String },
  stopLoss: { type: String },
});

module.exports = { Money };
