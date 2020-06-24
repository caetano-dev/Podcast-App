import React, { Component } from "react";
import firebase from "../../firebase";
import "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import Constants from "expo-constants";

export const EngagementContext = React.createContext();

const realTimeDB = firebase.database();
let deviceId = Constants.installationId;
const currUser = firebase.auth().currentUser;

export default class EngagementProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      user: null,
      engagementLoad: null,
      loading: true,
      loaded: false,
      latestPod: {
        cid: null,
        favourited: false,
        liked: false,
      },
    };
  }

  // TODO get all engagments for the specific user then manipulate that data where need be
  componentDidMount() {
    const { engagementLoad } = this.state;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        engagementLoad == null ? this.onEngagementLoad() : null;
      } else {
        this.setState({ user: null });
      }
    });

    // realTimeRef.on(
    //   "value",
    //   (snapshot) => console.log("snap", snapshot.val())
    //   this.setState((prevState) => ({
    //     userData: {
    //       ...prevState.userData,
    //       userData: snapshot.val(),
    //     },
    //   }))
    //    updateStarCount(postElement, snapshot.val());
    // );
    // await realTimeDB
    //   .ref("/engagement/" + authUID)
    //   .once("value")
    //   .then((snapshot) => {
    //     let snapVal = snapshot.val();
    //     console.log("snap,", snapVal);
    //     return this.setState({ userEngagement: snapVal });
    //   });
  }

  onEngagementLoad() {
    const authUID = this.state.user.uid;
    const engagementRef = firebase.database().ref("engagement/" + authUID);

    engagementRef.on("value", (snapshot) => {
      return (
        this.setState({ engagementLoad: snapshot.val() }),
        console.log("getData engagement", snapshot.val()),
        console.log("uuid", deviceId, "Auth uid", authUID)
      );
    });
  }

  render() {
    //  console.log("user state", this.state.user);
    //  console.log("State =>", this.state.latestPod);
    //  const getContentEngagement = async (cid) =>
    const getData = () => {};
    const likeClicked = async (cid) => {
      // using the cid provided by the current episode, update engagement with that cid
      try {
        realTimeDB.ref("engagement/" + authUID + cid).set({
          liked: true,
        });
      } catch (error) {
        console.log("err", error);
      }
    };

    return (
      <EngagementContext.Provider
        value={{
          state: this.state,
          getData: getData,
          likeClicked: likeClicked,
        }}
      >
        {this.props.children}
      </EngagementContext.Provider>
    );
  }
}
