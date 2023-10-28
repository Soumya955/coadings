import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://mock-api-template2.onrender.com" 
});

axiosInstance.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;
