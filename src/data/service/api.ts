import axios from "axios";

export const authAPI = axios.create({
  baseURL: "https://test-api-y04b.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const carsAPI = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

authAPI.interceptors.request.use((config) => {
  return config;
});

carsAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro on fetching cars data:", error);
    return Promise.reject(error);
  }
);
