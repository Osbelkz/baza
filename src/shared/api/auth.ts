import { apiInstance } from "./index";
import { IUser } from "./users";

export interface IRegisterUserData {
  email: string;
  firstName: string;
  lastname: string;
  login: string;
  password: string;
}

export const authService = {
  registrationUser(data: IRegisterUserData) {
    return apiInstance.post<IRegisterUserData, IUser>(
      "auth/registration",
      data
    );
  },
};
