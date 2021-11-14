import React, { lazy } from "react";
import paths from "./paths";
import { IRoute } from "./types";

export const routes: IRoute[] = [
  {
    exact: true,
    path: paths.home,
    redirect: paths.admin.root,
    fallback: <div> Loading... </div>,
  },
  {
    exact: true,
    path: paths.auth.login,
    component: lazy(() => import("pages/auth")),
    fallback: <div> Loading... </div>,
  },
  {
    exact: false,
    path: paths.admin.root,
    component: lazy(() => import("pages/admin-panel")),
    fallback: <div> Loading... </div>,
    private: true,
    routes: [
      {
        exact: true,
        path: paths.admin.categories,
        component: lazy(() => import("features/AdminPanelCategories")),
        fallback: <div> Loading... </div>,
        private: true,
      },
    ],
  },
];
