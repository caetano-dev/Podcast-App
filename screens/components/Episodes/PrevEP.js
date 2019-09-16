import React from "react";
import { Text, StyleSheet, View } from "react-native";

const PrevEP = () => {
  return (
    <View style={styles.prevEP}>
      <View style={styles.cont}>
        <View>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.epNum}>Ep.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  prevEP: {
    margin: 10,
    borderRadius: 30,
    borderWidth: 5,
    width: 300,
    height: 100,
    backgroundColor: "rgba(73, 90, 76, 0.9)"
  },
  cont: {
    flexDirection: "row"
  },
  title: {
    fontSize: 20,
    position: "absolute",
    top: 0,
    left: 15
  },
  epNum: {
    position: "absolute",
    top: 0,
    left: 230
  }
});

export default PrevEP;
