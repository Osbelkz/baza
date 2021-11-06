import { createEvent, createStore } from "effector";

export const toggleIsAuth = createEvent<{ isUserAuth: boolean }>();

export const $app = createStore({ isUserAuth: false }).on(
  toggleIsAuth,
  (state, { isUserAuth }) => ({ ...state, isUserAuth })
);
