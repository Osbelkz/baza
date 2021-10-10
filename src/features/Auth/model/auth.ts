import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";
import { LoginDTO } from "./models";

const BASE_URL = "/auth/login";

export const auth = (data: LoginDTO): AxiosPromise<AuthResponse> => {
  return apiInstance.post(BASE_URL, { data });
};

export type AuthResponse = {
  id_token: string;
};
