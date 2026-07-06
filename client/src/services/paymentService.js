import axios from "axios";

const API_URL = "https://lms-backend-tuns.onrender.com/api/payments";

export const getPayments = () => axios.get(API_URL);

export const addPayment = (payment) => axios.post(API_URL, payment);