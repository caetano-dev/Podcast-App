import React, { useState, Component } from "react";
import { View, ScrollView } from "react-native";
import { Layout, Text, Icon } from "@ui-kitten/components";

import {
  LikeButton,
  FavButton,
  DownloadButton
} from "../../../components/Icons/Icons";
import PodCard from "../../../components/PodCard.js";
import PlayerControls from "./PlayerControls";

export class Latest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: false
    };
  }

  render() {
    const { layout, epTitle, desc, epNum, ad } = this.props;
    const { audio } = this.state;

    const PreRollAudio = () => {
      return audio ? (
        <Icon
          name="music"
          fill="#E1940F"
          style={{ marginLeft: 10, height: 40, width: 40 }}
          onPress={() => this.setState({ audio: !audio })}
        />
      ) : (
        <Icon
          name="music-outline"
          onPress={() => this.setState({ audio: !audio })}
          style={{ marginLeft: 10, height: 40, width: 40 }}
        />
      );
    };
    return (
      <Layout
        style={{
          flex: layout,
          backgroundColor: null
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
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text category="h3" style={{ fontWeight: "bold" }}>
                  {epTitle}
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <DownloadButton />
                  <LikeButton />
                  <FavButton />
                </View>
              </View>

              <View style={{ flex: 2, marginTop: "2%" }}>
                <Text category="h5">{desc}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}
              >
                <View style={{ flex: 2, flexDirection: "row" }}>
                  <PreRollAudio />
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    {audio ? (
                      <>
                        <Text category="s1">Sponsored Track</Text>
                        <Text>{ad}</Text>
                      </>
                    ) : null}
                  </View>
                </View>

                <Text category="h4" style={{ fontWeight: "bold" }}>
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

export const Fav = ({ layout, epTitle, desc, epNum }) => {
  return (
    <Layout
      style={{
        flex: layout,
        backgroundColor: null
      }}
    >
      <PodCard
        flex={1}
        borderWidth={5}
        radius={20}
        bgColor={"white"}
        content={
          <Layout
            style={{
              flex: 1,
              flexDirection: "column",
              backgroundColor: null,
              justifyContent: "space-between"
            }}
          >
            <ScrollView>
              <PodCard
                flex={1}
                borderWidth={3}
                radius={20}
                content={
                  <Layout
                    style={{
                      flex: 1,
                      flexWrap: "wrap",
                      flexDirection: "column",
                      backgroundColor: null,
                      justifyContent: "center",
                      alignItems: "center",
                      margin: 5
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between"
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
                          justifyContent: "center",
                          alignItems: "flex-end"
                        }}
                      >
                        <LikeButton liked />
                        <FavButton />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <View
                        style={{
                          flex: 3,
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center"
                        }}
                      >
                        <View>
                          <DownloadButton />
                        </View>
                        <View>
                          <PlayerControls size={40} />
                        </View>
                      </View>

                      <View style={{ flex: 1 }}>
                        <Text category="h4" style={{ color: "black" }}>
                          {epNum}
                        </Text>
                      </View>
                    </View>
                  </Layout>
                }
              />
            </ScrollView>
          </Layout>
        }
      />
    </Layout>
  );
};

export const Archive = ({ layout, epTitle, desc, epNum }) => {
  return (
    <Layout
      style={{
        flex: layout,
        backgroundColor: null
      }}
    >
      <PodCard
        flex={1}
        borderWidth={5}
        radius={20}
        bgColor={"white"}
        content={
          <Layout
            style={{
              flex: 1,
              flexDirection: "column",
              backgroundColor: null,
              justifyContent: "space-between"
            }}
          >
            <ScrollView>
              <PodCard
                flex={1}
                borderWidth={3}
                radius={20}
                content={
                  <Layout
                    style={{
                      flex: 1,
                      flexWrap: "wrap",
                      flexDirection: "column",
                      backgroundColor: null,
                      justifyContent: "center",
                      alignItems: "center",
                      margin: 5
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between"
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
                          justifyContent: "center",
                          alignItems: "flex-end"
                        }}
                      >
                        <LikeButton />
                        <FavButton favouited />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <View
                        style={{
                          flex: 3,
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center"
                        }}
                      >
                        <View>
                          <DownloadButton />
                        </View>
                        <View>
                          <PlayerControls size={40} />
                        </View>
                      </View>

                      <View style={{ flex: 1 }}>
                        <Text category="h4" style={{ color: "black" }}>
                          {epNum}
                        </Text>
                      </View>
                    </View>
                  </Layout>
                }
              />
            </ScrollView>
          </Layout>
        }
      />
    </Layout>
  );
};

export const Download = ({ layout, epTitle, desc, epNum }) => {
  return (
    <Layout
      style={{
        flex: layout,
        backgroundColor: null
      }}
    >
      <PodCard
        flex={1}
        borderWidth={5}
        radius={20}
        bgColor={"white"}
        content={
          <Layout
            style={{
              flex: 1,
              flexDirection: "column",
              backgroundColor: null,
              justifyContent: "space-between"
            }}
          >
            <ScrollView>
              <PodCard
                flex={1}
                borderWidth={3}
                radius={20}
                content={
                  <Layout
                    style={{
                      flex: 1,
                      flexWrap: "wrap",
                      flexDirection: "column",
                      backgroundColor: null,
                      justifyContent: "center",
                      alignItems: "center",
                      margin: 5
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between"
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
                          justifyContent: "center",
                          alignItems: "flex-end"
                        }}
                      >
                        <LikeButton liked />
                        <FavButton favouited />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <View
                        style={{
                          flex: 3,
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center"
                        }}
                      >
                        <View>
                          <DownloadButton downloaded />
                        </View>
                        <View>
                          <PlayerControls size={40} />
                        </View>
                      </View>

                      <View style={{ flex: 1 }}>
                        <Text category="h4" style={{ color: "black" }}>
                          {epNum}
                        </Text>
                      </View>
                    </View>
                  </Layout>
                }
              />
            </ScrollView>
          </Layout>
        }
      />
    </Layout>
  );
};
