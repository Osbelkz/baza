import { createStore, combine, createEffect, createEvent } from "effector";

import { LoginDTO } from "./models";
import { auth, AuthResponse } from "./auth";

// В каждом эффекте так же может быть своя доп. обработка
const authUser = createEffect((data: LoginDTO) => {
  // Здесь также может быть доп. обработка эффекта
  return auth(data);
});

// Можно хранить и в нормализованном виде
export const $auth = createStore<AuthResponse>({ id_token: "" }).on(
  authUser.doneData,
  (_, payload) => payload.data
);
