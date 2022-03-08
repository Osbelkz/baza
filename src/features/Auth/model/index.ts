import { createEffect, sample } from "effector";
import { authApi } from "shared/api/api.instances";
import { toggleIsAuth } from "../../../shared/models/app";
import { LoginDto } from "../../../shared/openapi";

export const authUserFx = createEffect(async (data: LoginDto) => {
  const response = await authApi.login(data, {
    headers: { Authorization: "" },
  });
  window.localStorage.setItem("id_token", response.data.token);
  window.localStorage.setItem("refresh_token", response.data.refreshToken);
  console.log(response.data);

  return response.data;
});

sample({
  source: authUserFx.doneData,
  fn: () => true,
  target: toggleIsAuth,
});
