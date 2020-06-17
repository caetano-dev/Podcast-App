import React, { Component, useState } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import {
  Layout,
  Text,
  Button,
  Card,
  Icon,
  CardHeader,
  CheckBox,
  Select
} from "@ui-kitten/components";

export default class StoreList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [1, 2, 3, 4, 5]
    };
  }
  render() {
    const { mainHeader, component } = this.props;
    const { count } = this.state;

    const Header = () => (
      <CardHeader title={mainHeader} description="Season: 1" />
    );

    return (
      <Card
        header={Header}
        status="success"
        style={{ flex: 1, borderColor: "black", width: "100%" }}
      >
        <ScrollView horizontal>{component}</ScrollView>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden"
    // flexWrap: 'wrap'
  }
});
