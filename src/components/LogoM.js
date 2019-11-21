import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Logo = () => {
  return (
    <Image source={require("../../assets/Logo.png")} style={styles.icon} />
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 140,
    width: 350,
    marginTop: 30,
    alignSelf: "center"
  }
});

export default Logo;
