import React, { lazy } from "react";
import paths from "./paths";
import { IRoute } from "./types";

export const routes: IRoute[] = [
  {
    exact: true,
    path: paths.home,
    redirect: paths.admin,
    fallback: <div> Loading... </div>,
  },
  {
    exact: true,
    path: paths.auth.login,
    component: lazy(() => import("pages/auth")),
    fallback: <div> Loading... </div>,
  },
  {
    exact: true,
    path: paths.admin,
    component: lazy(() => import("pages/admin-panel")),
    fallback: <div> Loading... </div>,
    private: true,
  },
];
