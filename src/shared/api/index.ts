import axios from "axios";

export const apiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_DEV_API_HOST}app/rest/hms/`,
  withCredentials: true,
});

apiInstance.interceptors.request.use((request) => {
  const requestConfig = { ...request };

  const userToken = JSON.parse(window.localStorage.getItem("id_token") ?? "");

  if (userToken && userToken.id_token) {
    requestConfig.headers!["Accept-Language"] = "ru";
    requestConfig.headers!["Content-Type"] = "application/json";
    requestConfig.headers!.Authorization = `Bearer ${userToken.id_token}`;
    return requestConfig;
  }

  return requestConfig;
});

apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // store.dispatch("app/set-loading", { isLoading: false });
    // store.dispatch("app/set-error", { error: error.response.data });

    if (error.response.status === 401) {
      // store.dispatch("authUser/remove-local-storage-token");
      // store.dispatch("authUser/set-is-user-auth", { value: false });
      // windowGlobal.location.href = routesPath.signIn;
    }

    throw error;
  }
);
