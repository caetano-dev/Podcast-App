import React, { Component, memo } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button as BButton,
  TouchableOpacity
} from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

import Logo from "../components/LogoM";

import { logoutUser } from "../api/auth-api";

//firebase
import firebase from "firebase";
import "@firebase/firestore";

const db = firebase.firestore();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      playbackInstance: null,
      currentIndex: 0,
      volume: 1.0,
      isBuffering: true,
      url: "0",
      id: 0,
      date: null,
      name: "Name",
      desc: "Description"
    };
  }

  componentDidMount() {
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
          console.log(`url => ${doc.data().url}`);
        });
      })
      .then(
        Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
          shouldDuckAndroid: true,
          staysActiveInBackground: true,
          playThroughEarpieceAndroid: false
        })
      );

    this.loadAudio();
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

  render() {
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
        <View style={styles.newContent}>
          <Text h1 style={{ fontSize: 30 }}>
            Latest Episode
          </Text>
          <View style={styles.content}>
            <View>
              <View>
                <Text style={styles.titleHome}>{this.state.name}</Text>
                <Text style={styles.id}>EP. {this.state.id}</Text>
              </View>
            </View>
            <Text style={styles.description}>{this.state.desc}</Text>
            <Text style={{ fontSize: 15, alignSelf: "baseline" }}>
              {this.state.date}
            </Text>
          </View>
        </View>

        {/* contorls////////////////////////////////////////*/}
        <View style={{ flex: 1 }}>
          <View style={styles.controls}>
            <TouchableOpacity onPress={this.handlePreviousTrack}>
              <Ionicons name="ios-skip-backward" size={70} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePlayPause}>
              {this.state.isPlaying ? (
                <Ionicons name="ios-pause" size={70} color="black" />
              ) : (
                <Ionicons name="ios-play-circle" size={70} color="black" />
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handleNextTrack}>
              <Ionicons name="ios-skip-forward" size={70} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    flex: 2
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
