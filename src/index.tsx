import "reflect-metadata";

import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles/main.scss";

class Main {
  public init() {
    ReactDOM.render(
      <div>Hello World</div>,
      document.getElementById("appRoot"),
    );
  }
}

new Main().init();
