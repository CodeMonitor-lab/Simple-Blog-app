import axios from 'axios';
import toastMsg from '@/utils/toastMsg';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "127.0.0.1",
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong!";
    toastMsg.error(message, "error");
    return Promise.reject(error);
  }
);

export default apiClient;
