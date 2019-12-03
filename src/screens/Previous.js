import React, { Component, Fragment, memo } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback
} from "react-native";

import firebase from "firebase";
import "@firebase/firestore";
import { Collection } from "firestorter";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Audio } from "expo-av";

const episodes = new Collection("episodes");

const Previous = observer(
  class Previous extends Component {
    render() {
      const Data = observer(({ doc }) => {
        return <EpisodeItem doc={doc} />;
      });
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#55765D",
            flexDirection: "column"
          }}
        >
          <View style={{ flex: 0.2, padding: 5, marginTop: 30 }}>
            <Button
              color="#427389"
              title="Go to Home"
              onPress={() => this.props.navigation.navigate("Dashboard")}
            />
          </View>

          <Text style={{ fontSize: 40, alignSelf: "center" }}>
            Previous Episodes
          </Text>

          <View style={styles.scrollCont}>
            <ScrollView>
              <View>
                {episodes.docs.reverse().map(doc => (
                  <Data key={doc.id} doc={doc} />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
);

class EpisodeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      stopAvailable: false,
      playbackInstance: null,
      volume: 1.0,
      isBuffering: true
    };
  }
  async componentDidMount() {
    console.log("Previous CDM running");
    const { isPlaying, volume } = this.state;

    try {
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
      console.log(this.state.playbackInstance);
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
    const { isPlaying, playbackInstance, stopAvailable } = this.state;
    console.log(
      `handlePlayPause. isPlaying = ${isPlaying} playbackInstance = ${playbackInstance}`
    );
    isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance
          .playAsync()
          .then(this.setState({ stopAvailable: true }));

    this.setState({
      isPlaying: !isPlaying
    });
  };

  handleStop = async () => {
    const { isPlaying, stopAvailable, playbackInstance } = this.state;
    console.log(
      `handleStop. isPlaying = ${isPlaying}  playbackInstance = ${playbackInstance}`
    );
    try {
      await playbackInstance.unloadAsync();
      this.setState({ isPlaying: false, stopAvailable: false });
      this.componentDidMount();
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { name, id, date } = this.props.doc.data;
    const { isPlaying, stopAvailable } = this.state;

    return (
      <View style={styles.prevEP}>
        <View style={styles.cont}>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.id}>Ep.{id}</Text>
            <Text style={styles.date}>{date}</Text>
            {stopAvailable ? (
              <TouchableWithoutFeedback onPress={() => this.handleStop()}>
                <MaterialCommunityIcons
                  style={styles.stop}
                  name="stop-circle"
                  size={25}
                  color="black"
                />
              </TouchableWithoutFeedback>
            ) : null}

            <TouchableWithoutFeedback onPress={() => this.handlePlayPause()}>
              {isPlaying ? (
                <Ionicons
                  style={styles.playbutton}
                  name="ios-pause"
                  size={30}
                  color="black"
                />
              ) : (
                <Ionicons
                  style={styles.playbutton}
                  name="ios-play-circle"
                  size={30}
                  color="black"
                />
              )}
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

export default memo(Previous);

const styles = StyleSheet.create({
  scrollCont: {
    flex: 2,
    alignItems: "center",
    margin: 10,
    borderStyle: "solid",
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "rgba(73, 90, 76, 0.5)"
  },
  scroll: {
    flex: 1
  },
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
    left: 230
  },
  stop: {
    position: "absolute",
    top: 50,
    left: 175
  },
  prevEP: {
    flex: 2,
    margin: 5,
    borderRadius: 30,
    borderWidth: 5,
    width: 300,
    height: 100
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
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "rgba(73, 90, 76, 0.5)",
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
    height: 50,
    width: 150
  }
});
