import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_DEV_API_HOST}`,
  withCredentials: true,
});

api.interceptors.request.use((request) => {
  const requestConfig = { ...request };

  // const userToken = JSON.parse(windowGlobal?.localStorage.getItem('auth_user')!);

  // if (userToken && userToken.access_token) {
  //     requestConfig.headers['Accept-Language'] = 'ru';
  //     requestConfig.headers['Content-Type'] = 'application/json';
  //     requestConfig.headers.Authorization = `Bearer ${userToken.access_token}`;
  //     return requestConfig;
  // }

  return requestConfig;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    throw error;
  }
);
