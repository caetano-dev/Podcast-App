import React, { Component, useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Text, Spinner, Layout } from "@ui-kitten/components";
import { Audio } from "expo-av";
import AppContext from "../../../../context/AppContext";

Audio.setAudioModeAsync({
  allowsRecordingIOS: false,
  interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
  playsInSilentModeIOS: true,
  shouldDuckAndroid: true,
  interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
  playThroughEarpieceAndroid: false,
});

export default class PlayerControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingStatus: "noaudio",
      loading: false,
    };
  }

  componentDidMount() {
    const { loading } = this.state;
    console.log("loader", loading);
  }
  async startAudioProcess(src) {
    const { sound } = await Audio.Sound.createAsync(
      { uri: src },
      {
        shouldPlay: true,
        isLooping: false,
      },
      this.handleScreenForSoundStatus
    );

    this.sound = sound;
  }

  async _pauseAndPlayRecording() {
    if (this.sound != null) {
      if (this.state.playingStatus == "playing") {
        //console.log("pausing...");
        await this.sound.pauseAsync();
        //console.log("Paused!");
        this.setState({
          playingStatus: "donepause",
        });
      } else {
        //console.log("playing...");
        await this.sound.playAsync();
        //console.log("Playing!");
        this.setState({
          playingStatus: "playing",
        });
      }
    }
  }

  async handleStop() {
    if (this.sound != null) {
      //console.log("stopping...");
      await this.sound.stopAsync();
      //console.log("Stopped!");
      this.setState({
        playingStatus: "stopped",
      });
    }
  }

  handleScreenForSoundStatus = (status) => {
    if (status.isPlaying && this.state.playingStatus !== "playing") {
      this.setState({ playingStatus: "playing", loading: false });
    } else if (!status.isPlaying && this.state.playingStatus === "playing") {
      this.setState({ playingStatus: "donepause" });
    }
  };

  handlePlayPause = (src) => {
    switch (this.state.playingStatus) {
      case "noaudio":
      case "stopped":
        this.setState({ loading: true });
        this.startAudioProcess(src);
        break;
      case "donepause":
      case "playing":
        this._pauseAndPlayRecording();
        break;
    }
  };

  render() {
    const { size, margins, src } = this.props;
    const { playingStatus, loading } = this.state;
    return !loading ? (
      <Layout
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: null,
          margin: margins,
          alignItems: "center",
        }}
      >
        {/* <View>
          {prevTrackClicked ? (
            <Icon
              name="arrow-left"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ prevTrackClicked: !prevTrackClicked })
              }
            />
          ) : (
            <Icon
              name="arrow-left-outline"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ prevTrackClicked: !prevTrackClicked })
              }
            />
          )}
        </View> */}

        {/* {DONT DELETE */}

        {playingStatus == "playing" || playingStatus == "donepause" ? (
          <View>
            <Icon
              name="stop-circle"
              onPress={() => {
                this.handleStop();
              }}
              style={{ height: size, width: size }}
            />
          </View>
        ) : null}

        <View>
          {playingStatus !== "noaudio" ? (
            playingStatus == "playing" && playingStatus !== "stopped" ? (
              <Icon
                name="pause-circle"
                onPress={() => {
                  this.handlePlayPause();
                }}
                style={{
                  height: size,
                  width: size,
                }}
              />
            ) : (
              <Icon
                name="play-circle"
                onPress={() => {
                  this.handlePlayPause(src);
                }}
                style={{
                  height: size,
                  width: size,
                }}
              />
            )
          ) : (
            <Icon
              name="play-circle-outline"
              onPress={() => {
                this.handlePlayPause(src);
              }}
              style={{
                height: size,
                width: size,
              }}
            />
          )}
        </View>

        {/* {DONT DELETE */}

        {/* <View>
          {nextTrackClicked ? (
            <Icon
              name="arrow-right"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ nextTrackClicked: !nextTrackClicked })
              }
            />
          ) : (
            <Icon
              name="arrow-right-outline"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ nextTrackClicked: !nextTrackClicked })
              }
            />
          )}
        </View> */}
      </Layout>
    ) : (
      <Layout
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: null,
          margin: margins,
          alignItems: "center",
        }}
      >
        <View>
          <Spinner size="large" />
        </View>
      </Layout>
    );
  }
}

// const [player, setPlayer] = useState({
//   demo: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
//   playbackInstance: null,
//   isPlaying: false,
//   volume: 1.0,
//   playButton: false,
//   pauseButtonClicked: false,
//   isBuffering: null,
// });
