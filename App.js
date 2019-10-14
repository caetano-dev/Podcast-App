import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import { Audio } from "expo-av";

import PlayerState from "./context/player/PlayerState";

export default class App extends React.Component {
  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <PlayerState>
          <MainScreen />
        </PlayerState>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
