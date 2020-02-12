import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Img = () => {
  return <Image source={require("./shopping-cart.png")} style={styles.icon} />;
};

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 50
  }
});

export default Img;
