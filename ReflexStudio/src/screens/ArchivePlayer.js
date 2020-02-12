import React, { Component, Fragment, memo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback
} from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Logo from "../components/LogoM";

class ArchivePlayer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.cont}>
        <View style={styles.logoBTN}>
          <View>
            <Logo />
          </View>
          <View style={styles.buttonGroup}>
            <Button
              color="#427389"
              title="Latest Episode"
              onPress={() => navigation.navigate("Dashboard")}
            />
            <Button
              color="#427389"
              title="Episode Archive"
              onPress={() => navigation.navigate("Previous")}
            />
          </View>
        </View>

        {/*Content/////////////////////////////////////////// */}
        <View style={styles.newContent}>
          <Text h1 style={{ fontSize: 35, fontWeight: "bold" }}>
            Episode {navigation.getParam("id", "default value")}
          </Text>
          <View style={styles.content}>
            <View>
              <View>
                <Text style={styles.titleHome}>
                  {navigation.getParam("name", "default value")}
                </Text>
              </View>
            </View>
            <Text style={styles.description}>
              {/**Word cap @ 240 characters */}
              {navigation.getParam("description", "default value")}
            </Text>
            <Text
              style={{
                fontSize: 15,
                alignSelf: "baseline",
                fontWeight: "bold"
              }}
            >
              {navigation.getParam("date", "default value")}
            </Text>
          </View>

          {/* contorls////////////////////////////////////////*/}
          <Controls
            url={this.props.navigation.getParam("url", "default value")}
            name={this.props.navigation.getParam("name", "default value")}
          />
        </View>
      </View>
    );
  }
}

class Controls extends Component {
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
    console.log(`ArchivePlayer CDM running // Episode: ${this.props.name} `);
    console.log(`ArchivePlayer URL => ${this.props.url}`);
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
        uri: this.props.url
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
    const { isPlaying, stopAvailable } = this.state;
    return (
      <View style={styles.controls}>
        {stopAvailable ? (
          <TouchableWithoutFeedback onPress={() => this.handleStop()}>
            <MaterialCommunityIcons
              name="stop-circle"
              size={70}
              color="black"
            />
          </TouchableWithoutFeedback>
        ) : null}

        <TouchableWithoutFeedback onPress={() => this.handlePlayPause()}>
          {isPlaying ? (
            <Ionicons name="ios-pause" size={70} color="black" />
          ) : (
            <Ionicons name="ios-play-circle" size={70} color="black" />
          )}
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default memo(ArchivePlayer);

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#325F49",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  logoBTN: {
    flex: 1,
    justifyContent: "space-between"
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
    borderRadius: 30,
    borderWidth: 5,
    padding: 10,
    width: 300,
    backgroundColor: "#799688"
  },
  newContent: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  titleHome: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "auto"
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30
  }
});

{
  /**
class ArchiveItem extends Component {
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
    console.log("Archive CDM running");

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
    const { name, id, date, description } = this.props.doc.data;
    const { isPlaying, stopAvailable } = this.state;

    return (
      <Fragment>
        <View style={styles.newContent}>
          <Text h1 style={{ fontSize: 35 }}>
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

        <View style={{ flex: 1 }}>
          <View style={styles.controls}>
            {stopAvailable ? (
              <TouchableWithoutFeedback onPress={() => this.handleStop()}>
                <MaterialCommunityIcons
                  name="stop-circle"
                  size={70}
                  color="black"
                />
              </TouchableWithoutFeedback>
            ) : null}

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
 */
}
