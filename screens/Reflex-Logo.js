import React from "react";
import { Image, StyleSheet, View } from "react-native";

const OGLogo = () => {
  return (
    <View
      style={{
        backgroundColor: "#55765D",
        alignItems: "center"
      }}
    >
      <Image
        source={require("../assets/Reflex-logo.png")}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 110,
    width: 250,
    marginTop: 22
  }
});

export default OGLogo;
