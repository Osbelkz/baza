import { createStore, createEffect, createEvent } from "effector";

import { LoginDTO } from "./models";
import { auth, AuthResponse } from "./auth";

// В каждом эффекте так же может быть своя доп. обработка
const authUser = createEffect((data: LoginDTO) => {
  return auth(data);
});

// Можно хранить и в нормализованном виде
export const $auth = createStore<AuthResponse>({ id_token: "" }).on(
  authUser.doneData,
  (_, payload) => {
    window.localStorage.setItem("id_token", payload.data.id_token);
  }
);
