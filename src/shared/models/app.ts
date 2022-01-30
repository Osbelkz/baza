import { createEvent, createStore, sample } from "effector";
import { createEffect } from "effector/compat";

export const toggleIsAuth = createEvent<boolean>();

export const checkUserTokenFx = createEffect(() => {
  return window.localStorage.getItem("id_token");
});

export const $app = createStore({ isUserAuth: false }).on(
  toggleIsAuth,
  (state, payload) => ({ ...state, isUserAuth: payload })
);

sample({
  clock: checkUserTokenFx.done,
  fn: (token) => !!token.result,
  target: toggleIsAuth,
});
