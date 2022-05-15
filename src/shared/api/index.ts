import axios from "axios";
export const API_AUTH_URL = process.env.API_HOST;

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

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      const refreshToken = window.localStorage.getItem("refresh_token");
      originalRequest.headers!.Authorization = ``;
      if (refreshToken) {
        //   originalRequest._retry = true;
        //   const token = await authApi.refreshAccessToken({
        //     token: refreshToken,
        //   });
        //   window.localStorage.setItem("id_token", token.data.token);
        //   window.localStorage.setItem("refresh_token", token.data.refreshToken);
        //   originalRequest.headers!.Authorization = "Bearer " + token.data.token;
        //   return apiInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);
