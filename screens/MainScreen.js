import React, { Component } from "react";
import { ScrollView, Image, Text, View, Dimensions } from "react-native";

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
              width: screenWidth,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../assets/Logo.png")}
              style={StyleSheet.icon}
            />
            <Text>screen 1</Text>
          </View>
          <View
            style={{
              backgroundColor: "#55765D",

              flex: 1,
              width: screenWidth,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>screen 1</Text>
          </View>
          <View
            style={{
              backgroundColor: "#55765D",

              flex: 1,
              width: screenWidth,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>screen 1</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
