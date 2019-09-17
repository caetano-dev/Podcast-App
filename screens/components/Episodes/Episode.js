//all data will be iterated through this

import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Episode = ({ episode }) => {
  const { title, id, url, date, docID } = episode;

  return (
    <View style={styles.prevEP}>
      <View style={styles.cont}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.id}>Ep.{id}</Text>
        </View>
      </View>
    </View>
  );
};

// add the url to a button later

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
  id: {
    position: "absolute",
    top: 0,
    left: 230
  }
});

export default Episode;
