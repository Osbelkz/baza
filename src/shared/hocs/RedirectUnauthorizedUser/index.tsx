import React from "react";
import { useStore } from "effector-react";
import { $app } from "../../models/app";
import { Navigate, useLocation } from "react-router-dom";
import paths from "../../routes/paths";

export const RedirectUnauthorizedUser: React.FC = ({ children }) => {
  const { isUserAuth } = useStore($app);
  const location = useLocation();

  if (isUserAuth) {
    return <>{children}</>;
  } else {
    return <Navigate to={paths.auth.login} state={location.pathname} />;
  }
};
