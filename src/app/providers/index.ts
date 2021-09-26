import compose from "compose-function";
import { withRouter } from "./with-router";
import { withTheme } from "./with-theme";

export const withProviders = compose(withRouter);
