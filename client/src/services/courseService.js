import axios from "axios";

const API_URL = "https://lms-backend-tuns.onrender.com/api/courses";

export const getCourses = () => axios.get(API_URL);

export const addCourse = (course) => axios.post(API_URL, course);

export const deleteCourse = (id) => axios.delete(`${API_URL}/${id}`);