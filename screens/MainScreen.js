import React, { Component } from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button
} from "react-native";

import Smlogo from "./SmLogo";
import Logo from "./Logo";
import PrevEP from "./components/Episodes/PrevEP";
import { EpConsumer } from "../context/episodes/EpisodeContext";

export default class MainScreen extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;

    return (
      <EpConsumer>
        {context => (
          <View>
            <ScrollView horizontal={true} pagingEnabled={true}>
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
                  <Text style={{ alignSelf: "center", paddingTop: 20 }}>
                    Previous Episodes
                    {context.name}
                  </Text>
                  <ScrollView>
                    <View style={styles.Scroll}>
                      <View>
                        <PrevEP />
                      </View>
                      <View>
                        <PrevEP />
                      </View>
                      <View>
                        <PrevEP />
                      </View>
                      <View>
                        <PrevEP />
                      </View>
                      <View>
                        <PrevEP />
                      </View>
                      <View>
                        <PrevEP />
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
              {/*screen 1 ///////////////////////////////////////*/}
              <View
                style={{
                  backgroundColor: "#55765D",
                  flex: 1,
                  width: screenWidth
                }}
              >
                <View style={styles.settingdiv}>
                  <Image
                    source={require("../assets/settings.png")}
                    style={styles.setting}
                  />
                </View>
                <Logo />
                <View style={styles.newContent}>
                  <Text h1 style={{ fontSize: 30 }}>
                    Latest Episode
                  </Text>
                  <View style={styles.content}>
                    <View>
                      <Text style={{ fontSize: 20 }}>title</Text>
                      <Text
                        style={{
                          fontSize: 20,
                          position: "absolute",
                          top: 0,
                          right: 20
                        }}
                      >
                        EP. #
                      </Text>
                    </View>
                    <Text style={{ fontSize: 30, alignSelf: "center" }}>
                      Description
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={require("../assets/playbutton.png")}
                      style={styles.homePlay}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      </EpConsumer>
    );
  }
}

const styles = StyleSheet.create({
  settingdiv: { alignSelf: "flex-end", paddingRight: 25 },
  setting: { height: 25, width: 25, marginTop: 50 },
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
