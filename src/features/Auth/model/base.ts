import axios from "axios";
import { API_AUTH_URL } from "shared/config";

export const apiInstance = axios.create({
  baseURL: API_AUTH_URL,
  withCredentials: true,
});
