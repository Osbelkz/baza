import React, { Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import paths from "../paths";
import { IRoute } from "../types";

const RouteWithSubRoutes: React.FC<{ route: IRoute }> = ({ route }) => {
  const authenticated = true;

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
            authenticated ? (
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
