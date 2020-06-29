import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Layout, Text, Icon, Button } from "@ui-kitten/components";
import PlayerControls from "./PlayerControls";

import PodCard from "../../../components/PodCard.js";
import {
  LikeButton,
  FavButton,
  DownloadButton,
  InfoButton,
  AdButton,
} from "../../../components/Icons/Icons";

import { EngagementContext } from "../../../context/EngagementContext";

export const LatestItem = ({
  audio,
  epTitle,
  desc,
  epNum,
  ad,
  cid,
  engagementLoad,
}) => {
  const [audioState, setAudioState] = useState(audio);
  const [descState, setDescState] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <EngagementContext.Consumer>
      {(context) => {
        //  context.handleLike(cid);

        return (
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
                  <AdButton />

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <InfoButton />
                    <DownloadButton />
                    <LikeButton cid={cid} />
                    <FavButton />
                  </View>
                </View>

                <Layout style={{ flex: 2 }}>
                  {context.state.infoSection ? (
                    <ScrollView>
                      <View style={{ marginHorizontal: 5 }}>
                        <Text category="h6" style={{ color: "black" }}>
                          {epTitle}
                        </Text>
                        <Text category="s2" style={{ color: "black" }}>
                          {desc}
                        </Text>
                      </View>
                    </ScrollView>
                  ) : (
                    <View style={{ marginHorizontal: 5 }}>
                      <Text category="h4" style={{ color: "black" }}>
                        {epTitle}
                      </Text>
                    </View>
                  )}
                </Layout>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flex: 2, flexDirection: "row" }}>
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 10,
                      }}
                    >
                      {context.state.adSection ? (
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
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      marginRight: 10,
                    }}
                  >
                    {epNum}
                  </Text>
                </View>
              </Layout>
            }
          />
        );
      }}
    </EngagementContext.Consumer>
  );
};

export const FavItem = ({ epTitle, desc, epNum }) => {
  return (
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
            margin: 5,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text category="h3" style={{ fontWeight: "bold", color: "black" }}>
              {epTitle}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
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
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 3,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <View>
                <DownloadButton />
              </View>
              <View>{/* <PlayerControls size={40} /> */}</View>
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
  );
};

export const ArchiveItem = ({ epTitle, desc, epNum }) => {
  return (
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
            margin: 5,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View>
              <Text
                category="s1"
                style={{ fontWeight: "bold", color: "black" }}
              >
                {epTitle}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <LikeButton />
              <FavButton />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 3,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <View>
                <DownloadButton />
              </View>
              <View>{/* <PlayerControls size={40} /> */}</View>
            </View>

            <View style={{ flex: 1 }}>
              <Text category="h4" style={{ color: "black" }}>
                Ep.{epNum}
              </Text>
            </View>
          </View>
        </Layout>
      }
    />
  );
};

export const DownloadItem = ({ epTitle, desc, epNum }) => {
  return (
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
            margin: 5,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text category="h3" style={{ fontWeight: "bold", color: "black" }}>
              {epTitle}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
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
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 3,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <View>
                <DownloadButton downloaded />
              </View>
              <View>{/* <PlayerControls size={40} /> */}</View>
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
  );
};
