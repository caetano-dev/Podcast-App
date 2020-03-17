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
import { DownloadItem, ArchiveItem, FavItem, LatestItem } from "./ContentItem";

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

    return (
      <Layout
        style={{
          flex: layout,
          backgroundColor: null
        }}
      >
        <LatestItem
          audio={audio}
          epTitle={epTitle}
          desc={desc}
          epNum={epNum}
          ad={ad}
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
              <FavItem epTitle={epTitle} desc={desc} epNum={epNum} />
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
              <ArchiveItem epTitle={epTitle} desc={desc} epNum={epNum} />
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
              <DownloadItem epTitle={epTitle} desc={desc} epNum={epNum} />
            </ScrollView>
          </Layout>
        }
      />
    </Layout>
  );
};
