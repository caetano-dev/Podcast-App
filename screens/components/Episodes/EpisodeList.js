import React, { Fragment, Component, useContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback
} from "react-native";

//audio
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

//firebase
import firebase from "firebase";
import "@firebase/firestore";
import { initFirestorter, Collection } from "firestorter";
import { observer } from "mobx-react";

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

//context
import PlayerContext from "../../../context/player/PlayerContext";
const {
  isPlaying,
  playbackInstance,
  currentIndex,
  volume,
  isBuffering
} = PlayerContext;
//Define collection
const episodes = new Collection("episodes");
const latestep = new Collection("episodes");

handlePlayPause = async () => {
  const { isPlaying, playbackInstance } = this.state;
  isPlaying
    ? await playbackInstance.pauseAsync()
    : await playbackInstance.playAsync();

  this.setState({
    isPlaying: !isPlaying
  });
};

const Episodes = observer(
  class Episodes extends Component {
    render() {
      return (
        <Fragment>
          {episodes.docs.reverse().map(doc => (
            <EpisodeItem key={doc.id} doc={doc} />
          ))}
        </Fragment>
      );
    }
  }
);

const EpisodeItem = observer(({ doc }) => {
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
  // figure out how to load the audio data
  // add seek element & download to local storage
  return (
    <View style={styles.prevEP}>
      <View style={styles.cont}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.id}>Ep.{id}</Text>
          <Text style={styles.date}>{date}</Text>

          <TouchableWithoutFeedback onPress={() => this.handleAudio(url)}>
            <Ionicons
              name="ios-play-circle"
              size={32}
              color="black"
              style={styles.playbutton}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
});

const Latest = observer(
  class Latest extends Component {
    render() {
      latestep.query = ref => ref.orderBy("id", "desc").limit(1);
      return (
        <Fragment>
          {latestep.docs.map(doc => (
            <LatestEpisode key={doc.id} doc={doc} />
          ))}
        </Fragment>
      );
    }
  }
);

const LatestEpisode = observer(({ doc }) => {
  const { name, id, date, url, description } = doc.data;
  //audio player from article audio = note
  handleAudio = async url => {
    const soundObject = new Audio.Sound();
    try {
      //edit to allow play pause function
      await soundObject.loadAsync({ uri: url }, (downloadFirst = true));
      isPlaying
        ? await soundObject.pauseAsync()
        : await soundObject.playAsync();
      this.setState({
        isPlaying: !isPlaying
      });
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
        <View style={styles.overflow}>
          <View>
            <Text style={styles.titleHome}>{name}</Text>
            <Text style={styles.id}>EP. {id}</Text>
          </View>
        </View>
        <Text style={styles.description}>{description}</Text>
        <Text style={{ fontSize: 15, alignSelf: "baseline" }}> {date} </Text>
      </View>
      <TouchableWithoutFeedback onPress={() => this.handleAudio(url)}>
        {isPlaying ? (
          <Ionicons
            name="ios-pause"
            size={60}
            color="black"
            style={styles.homePlay}
          />
        ) : (
          <Ionicons
            name="ios-play-circle"
            size={60}
            color="black"
            style={styles.homePlay}
          />
        )}
      </TouchableWithoutFeedback>
    </View>
  );
});

export { Episodes, Latest };

const styles = StyleSheet.create({
  titleHome: {
    fontSize: 20,
    textAlign: "auto",
    marginRight: 40
  },
  title: {
    fontSize: 20,
    textAlign: "auto",
    marginRight: 40,
    left: 15
  },
  id: {
    position: "absolute",
    top: 0,
    fontSize: 20,
    textAlign: "right"
  },
  description: {
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    alignSelf: "center"
  },
  playbutton: {
    position: "absolute",
    top: 50,
    left: 260
  },
  prevEP: {
    margin: 10,
    borderRadius: 30,
    borderWidth: 5,
    width: 300,
    height: 100,
    backgroundColor: "rgba(73, 90, 76, 0.9)"
  },
  cont: {
    flexDirection: "row"
  },
  date: {
    fontSize: 15,
    marginRight: 50,
    left: 15,
    marginBottom: 100
  },
  id: {
    fontSize: 17,
    position: "absolute",
    top: 3,
    left: 230
  },
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
    height: 525
  },
  homePlay: {
    alignSelf: "center"
  }
});
