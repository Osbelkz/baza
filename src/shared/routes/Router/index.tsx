import React from "react";
import { Switch } from "react-router";
import RouteWithSubRoutes from "../RouteWithSubRoutes";
import { IRoute } from "../types";

interface IProps {
  routes: IRoute[];
}

const Router: React.FC<IProps> = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route: IRoute) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Switch>
  );
};

export default Router;
