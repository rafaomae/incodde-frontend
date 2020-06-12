import axios from "axios";
import { API_URL } from "../config";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  function (config) {
    const login = getToken();
    if (login !== null) {
      config.headers.Authorization = `Bearer ${login.token}`;
    }

    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default api;
