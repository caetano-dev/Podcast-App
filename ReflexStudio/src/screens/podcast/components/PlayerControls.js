import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Text, Layout } from "@ui-kitten/components";
import { Audio } from "expo-av";

export default class PlayerControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playButton: false,
      pauseButtonClicked: false,
      nextTrackClicked: false,
      prevTrackClicked: false,
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
        playThroughEarpieceAndroid: false,
      });
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: this.props.src && this.props.src,
      };

      const status = {
        shouldPlay: isPlaying,
        volume: volume,
      };

      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);
      this.setState({
        playbackInstance,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {
      playButton,
      pauseButtonClicked,
      nextTrackClicked,
      prevTrackClicked,
      isPlaying,
      stopAvailable,
    } = this.state;

    const { size, margins } = this.props;

    const onPlaybackStatusUpdate = (status) => {
      this.setState({
        isBuffering: status.isBuffering,
      });
    };

    const handlePlayPause = async () => {
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
        isPlaying: !isPlaying,
      });
    };

    const handleStop = async () => {
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

    return (
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
        </View>
        {playButton ? (
          <View>
            <Icon
              name="stop-circle"
              onPress={() => this.setState({ playButton: !playButton })}
              style={{ height: size, width: size }}
            />
          </View>
        ) : null}
        <View>
          {playButton ? (
            pauseButtonClicked ? (
              <Icon
                name="play-circle"
                onPress={() =>
                  this.setState({ pauseButtonClicked: !pauseButtonClicked })
                }
                style={{
                  height: size,
                  width: size,
                }}
              />
            ) : (
              <Icon
                name="pause-circle"
                onPress={() =>
                  this.setState({ pauseButtonClicked: !pauseButtonClicked })
                }
                style={{
                  height: size,
                  width: size,
                }}
              />
            )
          ) : (
            <Icon
              name="play-circle-outline"
              onPress={() => this.setState({ playButton: !playButton })}
              style={{
                height: size,
                width: size,
              }}
            />
          )}
        </View>
        <View>
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
        </View>
      </Layout>
    );
  }
}
