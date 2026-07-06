import axios from "axios";

const API_URL = "https://lms-backend-tuns.onrender.com/api/users";

export const getUsers = () => axios.get(API_URL);

export const addUser = (user) => axios.post(API_URL, user);

export const deleteUser = (id) =>
  axios.delete(`${API_URL}/${id}`);

