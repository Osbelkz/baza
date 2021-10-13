import React, { Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import { useStore } from "effector-react";
import paths from "../paths";
import { IRoute } from "../types";
import { $app } from "../../models/app";

const RouteWithSubRoutes: React.FC<{ route: IRoute }> = ({ route }) => {
  const { isUserAuth } = useStore($app);

  return (
    <Suspense fallback={route.fallback}>
      <Route
        path={route.path}
        render={(props) =>
          route.redirect ? (
            <Redirect
              to={{
                pathname: route.redirect,
                state: { from: route.path },
              }}
            />
          ) : route.private ? (
            isUserAuth ? (
              route.component && (
                <route.component {...props} routes={route.routes} />
              )
            ) : (
              <Redirect
                to={{
                  pathname: paths.auth.login,
                  state: { from: route.path },
                }}
              />
            )
          ) : (
            route.component && (
              <route.component {...props} routes={route.routes} />
            )
          )
        }
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;
