import React, { Component, useState, Fragment, memo } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button as BButton,
  TouchableWithoutFeedback
} from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

import Logo from "../components/LogoM";

import { logoutUser } from "../api/auth-api";

//firebase
import firebase from "firebase";
import "@firebase/firestore";
import { initFirestorter, Collection } from "firestorter";
import { observer } from "mobx-react";

// init firestorter
initFirestorter({ firebase: firebase });
const latestEP = new Collection("episodes");

const Dashboard = observer(
  class Dashboard extends Component {
    render() {
      latestEP.query = ref => ref.orderBy("id", "desc").limit(1);
      const Data = observer(({ doc }) => {
        return <DashboardItem doc={doc} />;
      });
      return (
        <View style={styles.cont}>
          <View style={styles.logoBTN}>
            <View style={{ flex: 1 }}>
              <Logo />
            </View>

            {/* Buttons//////////////////////////////////////// */}
            <View style={styles.buttonGroup}>
              <BButton
                color="#427389"
                title="Episode Archive"
                onPress={() => this.props.navigation.navigate("Previous")}
              />
              <BButton
                color="#427389"
                title="Logout"
                onPress={() => logoutUser()}
              />
            </View>
          </View>

          {/*Content/////////////////////////////////////////// */}
          <View style={{ flex: 2 }}>
            {latestEP.docs.map(doc => (
              <Data key={doc.id} doc={doc} />
            ))}
          </View>
        </View>
      );
    }
  }
);

class DashboardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      playbackInstance: null,
      volume: 1.0,
      isBuffering: true
    };
  }
  async componentDidMount() {
    const { isPlaying, volume } = this.state;

    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: false
      });
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: this.props.doc.data.url
      };

      const status = {
        shouldPlay: isPlaying,
        volume: volume
      };

      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);
      this.setState({
        playbackInstance
      });
    } catch (e) {
      console.log(e);
    }
  }

  onPlaybackStatusUpdate = status => {
    this.setState({
      isBuffering: status.isBuffering
    });
  };

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state;
    console.log(
      `handlePlayPause. isPlaying = ${isPlaying} playbackInstance = ${playbackInstance}`
    );
    isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance.playAsync();

    this.setState({
      isPlaying: !isPlaying
    });
  };
  render() {
    const { name, id, date, description } = this.props.doc.data;
    const { isPlaying } = this.state;

    return (
      <Fragment>
        <View style={styles.newContent}>
          <Text h1 style={{ fontSize: 30 }}>
            Latest Episode
          </Text>
          <View style={styles.content}>
            <View>
              <View>
                <Text style={styles.titleHome}>{name}</Text>
                <Text style={styles.id}>EP. {id}</Text>
              </View>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Text style={{ fontSize: 15, alignSelf: "baseline" }}>{date}</Text>
          </View>
        </View>

        {/* contorls////////////////////////////////////////*/}
        <View style={{ flex: 1 }}>
          <View style={styles.controls}>
            <TouchableWithoutFeedback onPress={() => this.handlePlayPause()}>
              {isPlaying ? (
                <Ionicons name="ios-pause" size={70} color="black" />
              ) : (
                <Ionicons name="ios-play-circle" size={70} color="black" />
              )}
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Fragment>
    );
  }
}

export default memo(Dashboard);

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#55765D",
    flex: 1,
    flexDirection: "column"
  },
  logoBTN: {
    flex: 1
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
  description: {
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    alignSelf: "center"
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
    flex: 2,
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
    height: 525
  },
  titleHome: {
    fontSize: 20,
    textAlign: "auto",
    marginRight: 40
  },
  controls: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

{
  /**
  componentDidMount() {
    try {
      if (this.state.url === null) {
        db.collection("episodes")
          .where("id", "==", "6")
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.setState({
                url: doc.data().url,
                id: doc.data().id,
                name: doc.data().name,
                desc: doc.data().description,
                date: doc.data().date
              });
            });
          });
      } else {
        this.loadAudio();
        Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
          shouldDuckAndroid: true,
          staysActiveInBackground: true,
          playThroughEarpieceAndroid: false
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async loadAudio() {
    const { currentIndex, isPlaying, volume, url } = this.state;
    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: url
      };
      const status = {
        shouldPlay: isPlaying,
        volume: volume
      };

      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);
      console.log(`the current url ${source}`);

      this.setState({
        playbackInstance
      });
    } catch (e) {
      console.log(e);
    }
  }

  onPlaybackStatusUpdate = status => {
    this.setState({
      isBuffering: status.isBuffering
    });
  };

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state;
    isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance.playAsync();

    this.setState({
      isPlaying: !isPlaying
    });
  };

  handlePreviousTrack = async () => {
    let { playbackInstance, currentIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      currentIndex < audioBookPlaylist.length - 1
        ? (currentIndex -= 1)
        : (currentIndex = 0);
      this.setState({
        currentIndex
      });
      this.loadAudio();
    }
  };

  handleNextTrack = async () => {
    let { playbackInstance, currentIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      currentIndex < audioBookPlaylist.length - 1
        ? (currentIndex += 1)
        : (currentIndex = 0);
      this.setState({
        currentIndex
      });
      this.loadAudio();
    }
  };
 */
}
