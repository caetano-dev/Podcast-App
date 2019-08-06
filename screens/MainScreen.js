import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  View,
  Dimensions
} from "react-native";

import Logo from "./Logo";

export default class MainScreen extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <View>
        <ScrollView horizontal={true} pagingEnabled={true}>
          {/*sheet 1 */}
          <View
            style={{
              backgroundColor: "#55765D",
              flex: 1,
              width: screenWidth
            }}
          >
            <Image
              source={require("../assets/settings.png")}
              style={styles.setting}
            />
            <Logo />
          </View>

          {/*sheet 2 */}
          <View
            style={{
              backgroundColor: "#55765D",
              flex: 1,
              width: screenWidth,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>screen 2</Text>
          </View>

          {/*sheet 3 */}

          <View
            style={{
              backgroundColor: "#55765D",

              flex: 1,
              width: screenWidth,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>screen 3</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  setting: { height: 25, width: 25, marginTop: 30, marginLeft: 500 }
});
