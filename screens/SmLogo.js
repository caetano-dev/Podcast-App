import React from "react";
import { Image, StyleSheet, View } from "react-native";

const SmLogo = () => {
  return (
    <View
      style={{
        backgroundColor: "#55765D",
        alignItems: "center"
      }}
    >
      <Image source={require("../assets/Logo.png")} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 100,
    width: 250,
    marginTop: 22
  }
});

export default SmLogo;
