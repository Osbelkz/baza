import axios from "axios";
export const API_AUTH_URL = "https://baza-application.herokuapp.com/";

export const apiInstance = axios.create({
  baseURL: API_AUTH_URL,
});

apiInstance.interceptors.request.use(
  function (config) {
    const userToken = window.localStorage.getItem("id_token");
    if (userToken) {
      config.headers!.Authorization = `Bearer ${userToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
