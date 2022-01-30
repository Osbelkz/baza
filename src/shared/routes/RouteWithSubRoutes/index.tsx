import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useStore } from "effector-react";
import paths from "../paths";
import { IRoute } from "../types";
import { $app } from "../../models/app";

const RouteWithSubRoutes: React.FC<IRoute> = ({ ...route }) => {
  const { isUserAuth } = useStore($app);
  return (
    <Route
      path={route.path}
      children={() => {
        return route.redirect ? (
          <Navigate to={route.redirect} state={route.path} />
        ) : route.private ? (
          isUserAuth ? (
            route.component && <route.component routes={route.routes} />
          ) : (
            <Navigate to={paths.auth.login} state={route.path} />
          )
        ) : (
          route.component && <route.component routes={route.routes} />
        );
      }}
    />
  );
};

export default RouteWithSubRoutes;
