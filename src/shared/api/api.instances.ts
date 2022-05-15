import {
  AdminCategoryApi,
  AdminCategoryGroupApi,
  AuthApi,
  CategoriesApi,
  CategoriesGroupApi,
  UpdateUserApi,
  UsersApi,
} from "../openapi";
import { API_AUTH_URL, apiInstance } from "./index";

export const categoriesApi = new CategoriesApi(
  undefined,
  API_AUTH_URL,
  apiInstance
);

export const categoriesGroupApi = new CategoriesGroupApi(
  undefined,
  API_AUTH_URL,
  apiInstance
);

export const adminCategoryApi = new AdminCategoryApi(
  undefined,
  API_AUTH_URL,
  apiInstance
);

export const adminCategoryGroupApi = new AdminCategoryGroupApi(
  undefined,
  API_AUTH_URL,
  apiInstance
);

export const adminUsersApi = new UsersApi(undefined, API_AUTH_URL, apiInstance);

export const updateAdminUsersApi = new UpdateUserApi(
  undefined,
  API_AUTH_URL,
  apiInstance
);

export const authApi = new AuthApi(undefined, API_AUTH_URL, apiInstance);
