import "reflect-metadata";

import * as React from "react";
import * as ReactDOM from "react-dom";

class Main {
  public init() {
    ReactDOM.render(
      <div>Hello World</div>,
      document.getElementById("appRoot"),
    );
  }
}

new Main().init();
