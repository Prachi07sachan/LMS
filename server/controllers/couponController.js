const Coupon = require("../models/Coupon");

exports.createCoupon = async (req, res) => {
  const coupon = await Coupon.create(req.body);
  res.json(coupon);
};

exports.getCoupons = async (req, res) => {
  const coupons = await Coupon.find();
  res.json(coupons);
};