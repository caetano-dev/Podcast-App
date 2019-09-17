import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MainScreen from "./screens/MainScreen";

{
  /*current branch is BackEnd*/
}

export default class App extends Component {
  // load data from firestore

  render() {
    return (
      <View style={styles.container}>
        <MainScreen />
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
