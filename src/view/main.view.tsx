import * as React from "react";
import { ReactNode } from "react";
import { Component, Store } from "reflux";

import "../styles/main.scss";

export class MainView extends Component<typeof Store, {}, {}> {
  public render(): ReactNode {
    return (
      <div>Hello World</div>
    );
  }
}
