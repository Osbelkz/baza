import React, { useEffect } from "react";
import "./index.scss";
import { Routing } from "pages";
import { withProviders } from "./providers";
import { checkUserTokenFx } from "../shared/models/app";

function App() {
  useEffect(() => {
    checkUserTokenFx();
  }, []);

  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default withProviders(App);
