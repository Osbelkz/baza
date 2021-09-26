import React from "react";
import { routes } from "shared/routes";
import Router from "shared/routes/Router";

export const Routing = () => {
  return <Router routes={routes.routes} />;
};
