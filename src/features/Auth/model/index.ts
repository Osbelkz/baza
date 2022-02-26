import { createEffect, sample } from "effector";
import { LoginDTO } from "./models";
import { auth } from "./auth";
import { toggleIsAuth } from "../../../shared/models/app";

export const authUserFx = createEffect(async (data: LoginDTO) => {
  const response = await auth(data);
  window.localStorage.setItem("id_token", response.data.token);
  console.log(response.data);

  return response.data;
});

sample({
  source: authUserFx.doneData,
  fn: () => true,
  target: toggleIsAuth,
});
