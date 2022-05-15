import {
  createApi,
  createEffect,
  createStore,
  forward,
  restore,
  sample,
  createEvent,
} from "effector";
import {
  adminUsersApi,
  authApi,
  updateAdminUsersApi,
} from "shared/api/api.instances";
import { createGate } from "effector-react";
import {
  UserDeleteDto,
  UserDto,
  UserRegistrationDto,
  UserUpdateDto,
} from "shared/openapi";

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
  const response = await updateAdminUsersApi.updateUser(data.id, data);
  return response;
});

export const deleteUserFx = createEffect(async (params: UserDeleteDto) => {
  const response = await adminUsersApi.deleteUser(params);
  return response;
});

export const $addUserModalVisibility = createStore(false);
export const addUserModalApi = createApi($addUserModalVisibility, {
  open: () => true,
  close: () => false,
});

export const openUpdateUserModal = createEvent<number>();
export const closeUpdateUserModal = createEvent();
export const $updateUserModalVisibility = createStore(false)
  .on(openUpdateUserModal, () => true)
  .reset([closeUpdateUserModal, updateUserFx.doneData]);

export const setUserForUpdate = createEvent<UserDto | null>();
export const $userForUpdate = createStore<UserDto | null>(null)
  .on(setUserForUpdate, (_, payload) => payload)
  .reset([closeUpdateUserModal, updateUserFx.doneData]);

sample({
  clock: openUpdateUserModal,
  source: $users,
  fn: (source, clock) =>
    source?.items.find((category) => category.id === clock) ?? null,
  target: setUserForUpdate,
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
