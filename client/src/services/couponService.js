import axios from "axios";

const API_URL = "http://localhost:5000/api/coupons";

export const getCoupons = () => axios.get(API_URL);

export const addCoupon = (coupon) => axios.post(API_URL, coupon);