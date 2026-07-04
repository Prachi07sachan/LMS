const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  studentName: String,
  courseName: String,
  amount: Number,
});

module.exports = mongoose.model("Payment", paymentSchema);