import React, { Component } from "react";
import firebase from "../../firebase";
import "@firebase/firestore";

export const EngagementContext = React.createContext();
// TODO remove engagement context entirely and place the liking feature in appcontext
const db = firebase.firestore();
const nid = {
  reflex: "sToBbV6lqw2H62vS9UyU",
};
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
      engagementExists: null,
      loggedUserEngagements: [],
    };
  }

  componentDidMount() {
    const { engagementLoad } = this.state;
    //get user info
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user }), this.loadUserEngagement();
      } else {
        this.setState({ user: null });
      }
    });
  }

  async loadUserEngagement() {
    const { user, loggedUserEngagements } = this.state;

    await db.collection("engagement").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const foundUserEngagment = Object.entries(doc.data()).find(
          ([key, value]) => key === user.uid
        );
        // console.log("bow", doc.id, " => ", doc.data());
        // console.log("pew", foundUserEngagment);

        // create an object that stores the engagement for each cid

        this.setState((prevState) => ({
          loggedUserEngagements: [
            ...prevState.loggedUserEngagements,
            { cid: doc.id, foundUserEngagment },
          ],
        }));

        // then push that into state
      });
    });
  }

  render() {
    const { loggedUserEngagements } = this.state;

    console.log("engagements logged in state", loggedUserEngagements);
    const handleLike = async (cid) => {
      const { user, engagementExists } = this.state;
      const engagementRef = db.collection("engagement").doc(cid);
      const uid = user.uid;

      if (engagementExists == null) {
        await engagementRef.get().then((doc) => {
          const data = doc.data();
          //  TODO do the next comments in order
          //0  consider replacing the logo with a spinner while loading
          //1 check if the user has already made an interaction || done
          const checkData = Boolean(Object.keys(data).find((i) => i == uid));
          console.log("data obj", data);
          //2 if an interaction has already been made update the value
          // if not then make theinteraction
          if (checkData == true) {
            // update the interaction here
            //   engagementRef;
          } else {
            //create the primary interaction here
          }

          //3 finally update ui
          return this.setState({ engagementExists: checkData });
        });
      } else if (engagementExists == true) {
        //   db.collection("engagement").doc(cid).update({
        //     uid: {
        //       state: "Ice Cream"
        //     }
        // })
      }

      // catalogRef.update({
      //   regions: firebase.firestore.FieldValue.arrayUnion("greater_virginia"),
      // });
    };
    return (
      <EngagementContext.Provider
        value={{
          state: this.state,
          handleLike: handleLike,
        }}
      >
        {this.props.children}
      </EngagementContext.Provider>
    );
  }
}
