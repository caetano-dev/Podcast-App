import React, { Component } from "react";

export const BodyContext = React.createContext();

export default class BodyProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoSwitch: "info",
    };
  }

  render() {
    return (
      <BodyContext.Provider value={this.state}>
        {this.props.children}
      </BodyContext.Provider>
    );
  }
}
