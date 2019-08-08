import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Logo = () => {
  return (
    <View
      style={{
        backgroundColor: "#55765D",
        flex: 1,
        alignItems: "center"
      }}
    >
      <Image source={require("../assets/Logo.png")} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 130,
    width: 350,
    marginTop: 5
  }
});

export default Logo;
