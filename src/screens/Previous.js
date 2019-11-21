import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

class Previous extends Component {
  render() {
    return (
      <View style={styles.cont}>
        <View style={{ paddingTop: 30 }}>
          <Button
            color="#427389"
            title="Go to Home"
            onPress={() => this.props.navigation.navigate("Dashboard")}
          />
        </View>
      </View>
    );
  }
}

export default Previous;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#55765D",
    flex: 1,
    flexDirection: "column"
  }
});
