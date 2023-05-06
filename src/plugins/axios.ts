import Axios, { AxiosInstance } from "axios";
import { useAuthStore } from "@/stores/index";

const axios: AxiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_ENDPOINT
});

axios.interceptors.request.use(config => {
  const authStore = useAuthStore();
  if (config.headers) {
    config.headers["Content-type"] = "application/json";
    config.headers["Authorization"] = "Bearer " + authStore.token;
    config.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS";
    config.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
  }
  return config;
});

export default axios;
