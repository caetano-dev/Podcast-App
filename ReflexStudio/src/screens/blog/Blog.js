import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Text, Button, Card } from "@ui-kitten/components";

import {
  BackHomeButton,
  LikeButton,
  FavButton,
  DownloadButton
} from "../../components/Icons/Icons";
import Logo from "../../components/Logo.js";
import PodCard from "../../components/PodCard.js";

export default Blog = ({ navigation }) => {
  const ItemHeader = props => (
    <View>
      <Text>{props.children}</Text>
    </View>
  );

  const ItemFooter = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      ></View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#A0A1B5" }}>
      <Layout style={{ flex: 1, backgroundColor: null }}>
        <Card
          style={styles.shopItem}
          header={() => <ItemHeader> Title 0 </ItemHeader>}
          footer={ItemFooter}
        ></Card>
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#A0A1B5",
    flex: 1,
    flexDirection: "column"
  },
  goback: {
    backgroundColor: null,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10
  },
  logo: {
    flex: 1,
    backgroundColor: null,
    marginVertical: 15,
    alignSelf: "center"
  },
  date: {
    fontSize: 15,
    marginRight: 50,
    left: 15,
    marginBottom: 100
  },
  id: {
    fontWeight: "bold",
    fontSize: 17,
    position: "absolute",
    top: 3,
    left: 230
  },
  description: {
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    alignSelf: "center"
  },
  content: {
    margin: 15,
    borderStyle: "solid",
    borderRadius: 30,
    borderWidth: 5,
    padding: 10,
    width: 300,
    backgroundColor: "#799688"
  },
  newContent: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  titleHome: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "auto",
    marginRight: 40
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
