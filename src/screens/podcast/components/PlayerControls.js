import React, { Component, useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Text, Spinner, Layout } from "@ui-kitten/components";
import { Audio } from "expo-av";
import AppContext from "../../../../context/AppContext";

export default class PlayerControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingStatus: "noaudio",
      loading: false,
    };
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
      await this.sound.stopAsync();
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
          <Spinner size="large" status="control" />
        </View>
      </Layout>
    );
  }
}
