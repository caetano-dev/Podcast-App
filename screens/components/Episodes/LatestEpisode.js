import React, { Fragment } from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";

//audio
import { Audio } from "expo-av";
//firebase
import firebase from "firebase";
import "@firebase/firestore";
import { initFirestorter, Collection } from "firestorter";

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
// init firestorter
initFirestorter({ firebase: firebase });

const episodes = new Collection("episodes");

//wrap component with mobx observer pattern
const Latest = observer(
  class Latest extends Component {
    render() {
      return (
        <Fragment>
          {episodes.docs.limit(1).map(doc => (
            <LatestEpisode key={doc.id} doc={doc} />
          ))}
        </Fragment>
      );
    }
  }
);

const LatestEpisode = observer(({ doc }) => {
  const { name, id, date, url } = doc.data;
  //audio player from article audio = note
  handleAudio = async url => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync({ uri: url }, (downloadFirst = true));

      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.newContent}>
      <Text h1 style={{ fontSize: 30 }}>
        Latest Episode
      </Text>
      <View style={styles.content}>
        <View>
          <Text style={{ fontSize: 20 }}>{name}</Text>
          <Text
            style={{
              fontSize: 20,
              position: "absolute",
              top: 0,
              right: 20
            }}
          >
            EP. {id}
          </Text>
        </View>
        <Text style={{ fontSize: 30, alignSelf: "center" }}>Description</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => this.handleAudio(url)}>
        <Image
          source={require("../../../assets/playbutton.png")}
          style={styles.homePlay}
        />
      </TouchableWithoutFeedback>
    </View>
  );
});

export default Latest;

const styles = StyleSheet.create({
  content: {
    margin: 15,
    borderStyle: "solid",
    borderColor: "rgba(73, 90, 76, 0.5)",
    borderRadius: 30,
    borderWidth: 5,
    padding: 10,
    width: 300,
    backgroundColor: "rgba(73, 90, 76, 0.5)"
  },
  newContent: {
    justifyContent: "center",
    alignItems: "center",
    height: 500
  },
  homePlay: {
    height: 50,
    width: 150
  }
});
