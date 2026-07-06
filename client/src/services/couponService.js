import axios from "axios";

const API_URL = "https://lms-backend-tuns.onrender.com/api/coupons";

export const getCoupons = () => axios.get(API_URL);

export const addCoupon = (coupon) => axios.post(API_URL, coupon);