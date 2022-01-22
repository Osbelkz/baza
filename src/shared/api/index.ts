import axios from "axios";

export const API_AUTH_URL = "https://baza-application.herokuapp.com/";

export const apiInstance = axios.create({
  baseURL: API_AUTH_URL,
});

// apiInstance.interceptors.request.use((request) => {
//   const requestConfig = { ...request };
//
//   const userToken = JSON.parse(window.localStorage.getItem("id_token") ?? "");
//
//   if (userToken && userToken.id_token) {
//     console.log(userToken.is_token);
//     requestConfig.headers!.Authorization = `Bearer ${userToken.id_token}`;
//     return requestConfig;
//   }
//   console.log(userToken.is_token);
//   return requestConfig;
// });
