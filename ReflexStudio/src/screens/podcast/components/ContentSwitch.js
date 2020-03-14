import React from "react";
import { View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import {
  LikeButton,
  FavButton,
  DownloadButton
} from "../../../components/Icons/Icons";
import PodCard from "../../../components/PodCard.js";

export const Latest = () => {
  return (
    <Layout
      style={{
        flex: 2,
        backgroundColor: null
      }}
    >
      <PodCard
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text category="h3" style={{ fontWeight: "bold" }}>
                Episode Title
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <LikeButton />
                <FavButton />
              </View>
            </View>

            <View>
              <Text category="h5">
                Description: Lorem ipsum dolor sit amet, consectetur … … … ...{" "}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <DownloadButton />

              <Text category="h4" style={{ fontWeight: "bold" }}>
                Ep. 1
              </Text>
            </View>
          </Layout>
        }
      />
    </Layout>
  );
};

export const Fav = () => {
  return (
    <Layout
      style={{
        flex: 2,
        backgroundColor: null
      }}
    >
      <PodCard
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text category="h3" style={{ fontWeight: "bold" }}>
                Episode Title
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <LikeButton />
                <FavButton />
              </View>
            </View>

            <View>
              <Text category="h5">
                Description: Lorem ipsum dolor sit amet, consectetur … … … ...{" "}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <DownloadButton />

              <Text category="h4" style={{ fontWeight: "bold" }}>
                Ep. 2
              </Text>
            </View>
          </Layout>
        }
      />
    </Layout>
  );
};

export const Archive = () => {
  return (
    <Layout
      style={{
        flex: 2,
        backgroundColor: null
      }}
    >
      <PodCard
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text category="h3" style={{ fontWeight: "bold" }}>
                Episode Title
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <LikeButton />
                <FavButton />
              </View>
            </View>

            <View>
              <Text category="h5">
                Description: Lorem ipsum dolor sit amet, consectetur … … … ...{" "}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <DownloadButton />

              <Text category="h4" style={{ fontWeight: "bold" }}>
                Ep. 3
              </Text>
            </View>
          </Layout>
        }
      />
    </Layout>
  );
};

export const Download = () => {
  return (
    <Layout
      style={{
        flex: 2,
        backgroundColor: null
      }}
    >
      <PodCard
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text category="h3" style={{ fontWeight: "bold" }}>
                Episode Title
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <LikeButton />
                <FavButton />
              </View>
            </View>

            <View>
              <Text category="h5">
                Description: Lorem ipsum dolor sit amet, consectetur … … … ...{" "}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <DownloadButton />

              <Text category="h4" style={{ fontWeight: "bold" }}>
                Ep. 4
              </Text>
            </View>
          </Layout>
        }
      />
    </Layout>
  );
};
