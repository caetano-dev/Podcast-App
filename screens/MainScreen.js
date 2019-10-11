import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Dimensions, Text } from "react-native";

import Smlogo from "./SmLogo";
import Logo from "./Logo";

import { Episodes, Latest } from "./components/Episodes/EpisodeList";

export default class MainScreen extends Component {
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: false
  };

  render() {
    let screenWidth = Dimensions.get("window").width;

    return (
      <View>
        <ScrollView horizontal={true} pagingEnabled={true}>
          {/*screen 1 ///////////////////////////////////////*/}
          <View
            style={{
              backgroundColor: "#55765D",
              flex: 1,
              width: screenWidth
            }}
          >
            <Logo />
            <View style={{ paddingTop: 100 }}>
              <Latest />
            </View>
          </View>
          {/*screen 2 ////////////////////////////////////////*/}
          <View
            style={{
              backgroundColor: "#55765D",

              flex: 1,
              width: screenWidth,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Smlogo />

            <View style={styles.Cont}>
              <Text
                style={{ alignSelf: "center", paddingTop: 20, fontSize: 20 }}
              >
                Previous Episodes
              </Text>
              <ScrollView>
                <View style={styles.Scroll}>
                  <Episodes />
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  latestContent: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    backgroundColor: "#55765D"
  },
  newContent: {
    justifyContent: "center",
    alignItems: "center",
    height: 500
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
  homePlay: {
    height: 50,
    width: 150
  },
  Cont: {
    margin: 5,
    borderStyle: "solid",
    borderColor: "rgba(73, 90, 76, 0.5)",
    borderRadius: 30,
    borderWidth: 5,
    width: 350,
    height: 525,
    backgroundColor: "rgba(73, 90, 76, 0.5)"
  },
  shopNew: {
    margin: 9,
    borderStyle: "solid",
    borderColor: "rgba(73, 90, 76, 0.9)",
    backgroundColor: "rgba(73, 90, 76, 0.9)",
    borderRadius: 30,
    borderWidth: 5,
    width: 100,
    height: 125
  },
  Scroll: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  }
});
