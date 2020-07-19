import React, { Component, useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Text, Spinner, Layout } from "@ui-kitten/components";
import { Audio } from "expo-av";
import AppContext from "../../../../context/AppContext";

export default class PlayerControls extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount() {
    const { state, dispatch } = this.context;
  }
  async startAudioProcess(src) {
    const { state, dispatch } = this.context;

    const { sound } = await Audio.Sound.createAsync(
      { uri: src },
      {
        shouldPlay: true,
        isLooping: false,
      },
      this.handleStatusUpdate
    );
    dispatch({ type: "PLAYER_ACTIVE", payload: sound });

    this.sound = sound;
  }

  async handlePlayPause() {
    const { state, dispatch } = this.context;

    if (state.playbackInstance != null) {
      if (state.playingStatus == "playing") {
        //pause here
        dispatch({
          type: "UPDATE_PLAYER_STATUS",
          payload: "donepause",
        });
        await state.playbackInstance.pauseAsync();
      } else {
        //play here
        await state.playbackInstance.playAsync();

        dispatch({
          type: "UPDATE_PLAYER_STATUS",
          payload: "playing",
        });
      }
    }
  }

  async handleStop() {
    const { state, dispatch } = this.context;

    if (state.playbackInstance != null) {
      await state.playbackInstance.stopAsync();
      dispatch({
        type: "UPDATE_PLAYER_STATUS",
        payload: "stopped",
      });
      dispatch({
        type: "UPDATE_MEDIA_CONTROL",
        payload: null,
      });
    }
  }

  handleStatusUpdate = (status) => {
    const { state, dispatch } = this.context;

    if (status.isPlaying && state.playingStatus !== "playing") {
      dispatch({
        type: "UPDATE_PLAYER_STATUS",
        payload: "playing",
      });
      this.setState({
        loading: false,
      });
      this.props.cid &&
        dispatch({
          type: "UPDATE_MEDIA_CONTROL",
          payload: this.props.cid,
        });
    } else if (!status.isPlaying && state.playingStatus === "playing") {
      dispatch({
        type: "UPDATE_PLAYER_STATUS",
        payload: "donepause",
      });
    }
  };

  onPlayPause = (src) => {
    const { state, dispatch } = this.context;

    switch (state.playingStatus) {
      case "noaudio":
      case "stopped":
        this.setState({ loading: true });
        this.startAudioProcess(src);
        break;
      case "donepause":
      case "playing":
        this.handlePlayPause();
        break;
    }
  };

  render() {
    const { state, dispatch } = this.context;
    const { size, margins, src, primarySpinner, cid } = this.props;
    const { loading } = this.state;
    const { playingStatus } = state;

    return playingStatus && !loading ? (
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
          {playingStatus !== "noaudio" && playingStatus !== "stopped" ? (
            playingStatus == "playing" && playingStatus !== "stopped" ? (
              <Icon
                name="pause-circle"
                onPress={() => {
                  this.onPlayPause();
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
                  this.onPlayPause(src);
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
                this.onPlayPause(src);
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
          <Spinner
            size="giant"
            status={primarySpinner ? "control" : "primary"}
          />
        </View>
      </Layout>
    );
  }
}
