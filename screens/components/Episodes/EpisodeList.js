// this page should be like the "page" page in the react webpage
// should take episodes and map them through prevEP
import React, { Fragment } from "react";
import { Text, StyleSheet, View } from "react-native";

import Episode from "./Episode";
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

export default class EpisodeList extends React.Component {
  state = {
    episodes: []
  };
  componentDidMount() {
    dbh
      .collection("episodes")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          title = doc.data().name;
          id = doc.data().id;
          url = doc.data().url;
          date = doc.data().date;
          docID = doc.id;
          this.setState({ episodes: [title, id, url, date, docID] });
        });
      });
  }
  render() {
    return (
      <Fragment>
        {episodes.map(episode => (
          <Episode key={episode.docID} episode={episode} />
        ))}
      </Fragment>
    );
  }
}
