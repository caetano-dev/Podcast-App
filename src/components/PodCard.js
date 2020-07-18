import React from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

const PodCard = ({ content, radius, borderWidth, bgColor, flex }) => {
  return (
    <View
      style={{
        margin: "1%",
        borderWidth: borderWidth,
        borderRadius: radius,
        flex: flex,
        backgroundColor: bgColor,
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      {content}
    </View>
  );
};

export default PodCard;
