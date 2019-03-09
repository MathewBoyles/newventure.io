import "reflect-metadata";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MainView } from "./view/main.view";

class Main {
  public init() {
    ReactDOM.render(
      <MainView />,
      document.getElementById("appRoot"),
    );
  }
}

new Main().init();
