import React, { Component } from "react";
import firebase from "../../firebase";
import "@firebase/firestore";

export const AppContext = React.createContext();

const db = firebase.firestore();
const nid = {
  reflex: "sToBbV6lqw2H62vS9UyU",
};
const networkRef = db.collection("network").doc(nid.reflex);

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: {},
      infoSection: false,
      adSection: false,
    };
  }

  async componentDidMount() {
    try {
      //get
      await networkRef.get().then((doc) => {
        if (doc.exists) {
          const reflexPodCatalogue = doc.data();

          return this.setState({ episodes: reflexPodCatalogue });
          console.log("network id => ", nid.reflex);
          console.log("Document => ", this.state.episodes.ep1.title);
        } else {
          console.log("No such document!");
        }
      });
    } catch (error) {
      console.log("err", error);
    }
  }

  render() {
    const openInfo = () => {
      this.setState({ infoSection: true });
    };
    const closeInfo = () => {
      this.setState({ infoSection: false });
    };
    const openAd = () => {
      this.setState({ adSection: true });
    };
    const closeAd = () => {
      this.setState({ adSection: false });
    };
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          openInfo: openInfo,
          closeInfo: closeInfo,
          openAd: openAd,
          closeAd: closeAd,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
