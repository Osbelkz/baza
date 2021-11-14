import React from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () =>
  <BrowserRouter>{component()}</BrowserRouter>;
