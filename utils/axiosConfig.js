import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Replace with your API base URL
  // baseURL: "https://code-back-battlesofarmys-projects.vercel.app", // Replace with your API base URL
  timeout: 10000, // Optional: Set timeout (in ms)
  headers: { "Content-Type": "application/json" }, // Optional: Default headers
});

export default api;