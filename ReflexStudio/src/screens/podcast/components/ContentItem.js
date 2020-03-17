import React, { useState } from "react";
import { View } from "react-native";
import { Layout, Text, Icon } from "@ui-kitten/components";
import PlayerControls from "./PlayerControls";

import PodCard from "../../../components/PodCard.js";
import {
  LikeButton,
  FavButton,
  DownloadButton
} from "../../../components/Icons/Icons";

export const LatestItem = ({ audio, epTitle, desc, epNum, ad }) => {
  const [audioState, setAudioState] = useState(audio);

  const PreRollAudio = () => {
    return audioState ? (
      <Icon
        name="music"
        fill="#E1940F"
        style={{ marginLeft: 10, height: 40, width: 40 }}
        onPress={() => setAudioState(!audioState)}
      />
    ) : (
      <Icon
        name="music-outline"
        onPress={() => setAudioState(!audioState)}
        style={{ marginLeft: 10, height: 40, width: 40 }}
      />
    );
  };
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
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {audioState ? (
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
            <Text category="h3" style={{ fontWeight: "bold", color: "black" }}>
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
            <Text category="h3" style={{ fontWeight: "bold", color: "black" }}>
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
            <Text category="h3" style={{ fontWeight: "bold", color: "black" }}>
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
  );
};
