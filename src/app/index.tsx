import React from "react";
import "./index.scss";
import { Routing } from "pages";
import { withProviders } from "./providers";

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default withProviders(App);
