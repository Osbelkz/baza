import React from "react";
import { IRoute } from "../types";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import paths from "../paths";
import AdminPanelPage from "../../../pages/admin-panel";
import AdminLoginPage from "../../../pages/auth";
import AdminPanelCategories from "../../../features/AdminPanelCategories";
import AdminPanelUsers from "../../../features/AdminPanelUsers";
import { RedirectUnauthorizedUser } from "../../hocs";

interface IProps {
  routes: IRoute[];
}
const Router: React.FC<IProps> = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route
        path={paths.home}
        element={<Navigate to={paths.auth.login} state={location.state} />}
      />
      <Route
        path={paths.admin.root}
        element={
          <RedirectUnauthorizedUser>
            <AdminPanelPage />
          </RedirectUnauthorizedUser>
        }
      >
        <Route index element={<AdminPanelCategories />} />
        <Route path={paths.admin.users} element={<AdminPanelUsers />} />
      </Route>
      <Route path={paths.auth.login} element={<AdminLoginPage />} />
    </Routes>
  );
};

export default Router;
