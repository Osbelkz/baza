import { createEffect, sample } from "effector";
import { LoginDTO } from "./models";
import { auth } from "./auth";
import { toggleIsAuth } from "../../../shared/models/app";

// В каждом эффекте так же может быть своя доп. обработка
export const authUser = createEffect((data: LoginDTO) => {
  return auth(data);
});

// Можно хранить и в нормализованном виде
// export const $auth = createStore<AuthResponse>({ id_token: "" }).on(
//   authUser.doneData,
//   (_, payload) => {
//     window.localStorage.setItem("id_token", payload.data.id_token);
//   }
// );

sample({
  source: authUser.doneData,
  fn: () => ({ isUserAuth: true }),
  target: toggleIsAuth,
});
