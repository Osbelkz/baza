import React from "react";
import { ThemeProvider } from "styled-components";

export const withTheme = (component: () => React.ReactNode) => () =>
  <ThemeProvider theme={() => {}}>{component()}</ThemeProvider>;
