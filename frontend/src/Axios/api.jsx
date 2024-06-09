import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44307/api", // aca va donde levanta el back en su local. (en un futuro ira el link del deploy)
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
