import React from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

const PodCard = ({ content, radius, borderWidth, bgColor }) => {
  return (
    <View
      style={{
        margin: "2%",
        borderWidth: borderWidth,
        borderRadius: radius,
        flex: 1,
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
