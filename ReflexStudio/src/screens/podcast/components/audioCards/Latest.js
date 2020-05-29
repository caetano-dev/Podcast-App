import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { Layout, Text, Icon } from "@ui-kitten/components";
import Logo from "../../../../components/Logo.js";
import PodCard from "../../../../components/PodCard";
import {
  BackHomeButton,
  LikeButton,
  FavButton,
  DownloadButton,
} from "../../../../components/Icons/Icons";

class Latest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: false,
    };
  }
  render() {
    const { layout, epTitle, desc, epNum, ad } = this.props;
    const { audio } = this.state;
    return (
      <Layout
        style={{
          flex: layout,
          backgroundColor: null,
        }}
      >
        <PodCard
          flex={1}
          borderWidth={4}
          radius={20}
          bgColor={"white"}
          content={
            <Layout
              style={{
                flex: 1,
                flexWrap: "wrap",
                flexDirection: "column",
                backgroundColor: null,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  category="h3"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  {epTitle}
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <DownloadButton />
                  <LikeButton />
                  <FavButton />
                </View>
              </View>

              <View style={{ flex: 2, marginTop: "2%" }}>
                <Text category="h5" style={{ color: "black" }}>
                  {desc}
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 2, flexDirection: "row" }}>
                  {audio ? (
                    <Icon
                      name="music"
                      fill="#E1940F"
                      style={{ marginLeft: 10, height: 40, width: 40 }}
                    />
                  ) : (
                    <Icon
                      name="music-outline"
                      style={{ marginLeft: 10, height: 40, width: 40 }}
                    />
                  )}
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    {audio ? (
                      <>
                        <Text category="s1" style={{ color: "black" }}>
                          Sponsored Track
                        </Text>
                        <Text style={{ color: "black" }}>{ad}</Text>
                      </>
                    ) : null}
                  </View>
                </View>

                <Text
                  category="h4"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  {epNum}
                </Text>
              </View>
            </Layout>
          }
        />
      </Layout>
    );
  }
}

export default Latest;
