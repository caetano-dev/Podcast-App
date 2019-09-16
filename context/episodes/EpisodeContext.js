import React from "react";
import firebase from "firebase";
import "@firebase/firestore";

// Firebase Init
const firebaseConfig = {
  apiKey: "AIzaSyAITLDmtIK2ZyEjwYfGZkKqYHab5CnVHXo",
  authDomain: "podcast-68ac0.firebaseapp.com",
  databaseURL: "https://podcast-68ac0.firebaseio.com",
  projectId: "podcast-68ac0",
  storageBucket: "podcast-68ac0.appspot.com",
  messagingSenderId: "354277042339",
  appId: "1:354277042339:web:fb61eba51d8dfa2fc57716"
};

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

//state init
const initialState = {
  episode: "4",
  name: ""
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
  componentDidMount() {
    dbh
      .collection("episodes")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          const nom = doc.data().name;
          this.setState({ name: nom });
        });
      });
  }

  render() {
    return (
      <EpContext.Provider
        value={{
          episode: this.state.episode,
          name: this.state.name
        }}
      >
        {this.props.children}
      </EpContext.Provider>
    );
  }
}
