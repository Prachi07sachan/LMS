const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: String,
  discount: Number,
});

module.exports = mongoose.model("Coupon", couponSchema);