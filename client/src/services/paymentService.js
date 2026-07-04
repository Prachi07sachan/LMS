import axios from "axios";

const API_URL = "http://localhost:5000/api/payments";

export const getPayments = () => axios.get(API_URL);

export const addPayment = (payment) => axios.post(API_URL, payment);