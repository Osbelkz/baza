import {
  createApi,
  createEffect,
  createStore,
  forward,
  restore,
  sample,
} from "effector";
import { createGate } from "effector-react";
import { adminUsersApi, authApi } from "shared/api/api.instances";
import { UserRegistrationDto, UserUpdateDto } from "shared/openapi";

export const registrationUserFx = createEffect(
  async (data: UserRegistrationDto) => {
    const response = await authApi.registration(data);
    return response;
  }
);

export const getAdminUsersFx = createEffect(
  async (params?: { offset?: number; page?: number }) => {
    const response = await adminUsersApi.getUsers(params?.offset, params?.page);
    return response.data;
  }
);

export const $users = restore(getAdminUsersFx.doneData, null);

export const updateUserFx = createEffect(async (data: UserUpdateDto) => {
  const response = await adminUsersApi.updateUser(data);
  return response;
});

export const deleteUserFx = createEffect(async (params: null) => {
  // const response = await adminUsersApi.updateUser(params);
  // return response;
});

export const $addUserModalVisibility = createStore(false);
export const addUserModalApi = createApi($addUserModalVisibility, {
  open: () => true,
  close: () => false,
});

export const GetUsersGate = createGate();

sample({
  clock: GetUsersGate.open,
  target: getAdminUsersFx,
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
  target: getAdminUsersFx,
});
