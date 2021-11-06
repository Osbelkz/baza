import React from "react";
import { Switch } from "react-router";
import { Redirect, Route } from "react-router-dom";
import { useStore } from "effector-react";
import { IRoute } from "../types";
import paths from "../paths";
import { $app } from "../../models/app";

interface IProps {
  routes: IRoute[];
}

const Router: React.FC<IProps> = ({ routes }) => {
  const { isUserAuth } = useStore($app);

  return (
    <Switch>
      {routes.map((route: IRoute) => {
        return (
          <Route
            path={route.path}
            exact={route.exact}
            render={(props) => {
              console.log(route);

              return route.redirect ? (
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
              );
            }}
          />
        );
      })}
    </Switch>
  );
};

export default Router;
