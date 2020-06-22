import React, { Component } from "react";

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: "en",
      SlangModal: false,
      Levels: 0,
      initialGraph: [],
      collectiveData: [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
        },
      ],
    };
  }

  render() {
    const openModal = () => {
      this.setState({ SlangModal: true });
    };

    const closeModal = () => {
      this.setState({ SlangModal: false });
    };

    return (
      <AppContext.Provider
        value={{
          state: this.state,
          openModal: openModal,
          closeModal: closeModal,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
