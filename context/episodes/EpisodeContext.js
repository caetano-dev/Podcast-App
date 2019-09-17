import React from "react";

//state init
const initialState = {
  episodedata: []
};

//context
export const EpContext = React.createContext();
export const EpConsumer = EpContext.Consumer;

//AUDIO IS ACCESSED VIA const value = doc.data().url

export class EpProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <EpContext.Provider
        value={{
          episodedata: this.state.episodedata
        }}
      >
        {this.props.children}
      </EpContext.Provider>
    );
  }
}
