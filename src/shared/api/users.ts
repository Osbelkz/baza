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
  lastname: string;
  login: string;
}

export interface IGetUsersResponse {
  content: IUser[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    unpaged: boolean;
  };
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
  getUsers(params: IGetUsersParams) {
    return apiInstance.get<IGetUsersResponse>("admin/users", { params });
  },
  updateUser(data: IUpdateUserData) {
    return apiInstance.put<IUpdateUserData, IUser>("admin/users", data);
  },
  deleteUser(params: IDeleteUserParams) {
    return apiInstance.delete(`admin/users/${params.userId}`);
  },
  restoreUser(userId: string) {
    return apiInstance.put<IUser>(`admin/users/restore/${userId}`);
  },
};
