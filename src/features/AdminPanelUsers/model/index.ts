import {
  createApi,
  createEffect,
  createStore,
  forward,
  restore,
  sample,
} from "effector";
import {
  IDeleteUserParams,
  IGetUsersParams,
  IUpdateUserData,
  usersService,
} from "../../../shared/api/users";
import { authService, IRegisterUserData } from "../../../shared/api/auth";
import { createGate } from "effector-react";

export const registrationUserFx = createEffect(
  async (data: IRegisterUserData) => {
    const response = await authService.registrationUser(data);
    return response;
  }
);

export const getUsersFx = createEffect(async (params?: IGetUsersParams) => {
  const response = await usersService.getUsers(params);
  return response.data;
});

export const $users = restore(getUsersFx.doneData, null);

export const updateUserFx = createEffect(async (data: IUpdateUserData) => {
  const response = await usersService.updateUser(data);
  console.log(response);
  return response;
});

export const deleteUserFx = createEffect(async (params: IDeleteUserParams) => {
  const response = await usersService.deleteUser(params);
  console.log(response);
  return response;
});

export const $addUserModalVisibility = createStore(false);
export const addUserModalApi = createApi($addUserModalVisibility, {
  open: () => true,
  close: () => false,
});

export const GetUsersGate = createGate();

sample({
  clock: GetUsersGate.open,
  target: getUsersFx,
});

forward({
  from: registrationUserFx.doneData,
  to: addUserModalApi.close,
});

sample({
  clock: [
    updateUserFx.doneData,
    registrationUserFx.doneData,
    deleteUserFx.done,
  ],
  fn: () => ({}),
  target: getUsersFx,
});
