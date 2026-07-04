const express = require("express");
const router = express.Router();
const {
  createCoupon,
  getCoupons,
} = require("../controllers/couponController");

router.post("/", createCoupon);
router.get("/", getCoupons);

module.exports = router;