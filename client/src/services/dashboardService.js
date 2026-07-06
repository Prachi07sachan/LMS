import axios from "axios";

const BASE_URL = "https://lms-backend-tuns.onrender.com/api";

export const getUsers = () =>
  axios.get(`${BASE_URL}/users`);

export const getCourses = () =>
  axios.get(`${BASE_URL}/courses`);

export const getPayments = () =>
  axios.get(`${BASE_URL}/payments`);

export const getCoupons = () =>
  axios.get(`${BASE_URL}/coupons`);