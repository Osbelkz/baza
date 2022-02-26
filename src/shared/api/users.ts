import { IItemsResponse } from "shared/types";
import { apiInstance } from "./index";

export interface IGetUsersParams {
  offset?: number;
  paged?: boolean;
  pageNumber?: number;
  pageSize?: number;
}

export interface IUser {
  activate: boolean;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  login: string;
}

export interface IUpdateUserData {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
}

export interface IDeleteUserParams {
  userId: number;
}

export const usersService = {
  getUsers(params?: IGetUsersParams) {
    return apiInstance.get<IItemsResponse<IUser[]>>("users", { params });
  },
  updateUser(data: IUpdateUserData) {
    return apiInstance.put<IUpdateUserData, IUser>("users", data);
  },
  deleteUser(params: IDeleteUserParams) {
    return apiInstance.delete(`users/${params.userId}`);
  },
  restoreUser(userId: string) {
    return apiInstance.put<IUser>(`users/restore/${userId}`);
  },
};
