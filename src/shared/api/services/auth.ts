import { api } from "../base";

export const authService = {
  signIn(data: { login: string; password: string }) {
    return api.post("auth/login", data);
  },
};
