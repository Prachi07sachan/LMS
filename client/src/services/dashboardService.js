import axios from "axios";

export const getUsers = () =>
  axios.get("http://localhost:5000/api/users");

export const getCourses = () =>
  axios.get("http://localhost:5000/api/courses");

export const getPayments = () =>
  axios.get("http://localhost:5000/api/payments");

export const getCoupons = () =>
  axios.get("http://localhost:5000/api/coupons");