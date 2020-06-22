import React, { Component } from "react";
import App from "./App";

import { BodyProvider, AppProvider } from "./Context";

export default class Core extends Component {
  componentDidMount() {
    console.log("Brain Here");
  }
  render() {
    return (
      <AppProvider>
        <BodyProvider>
          <App />
        </BodyProvider>
      </AppProvider>
    );
  }
}
