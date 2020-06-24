import React, { useState, Component } from "react";
import { View, ScrollView } from "react-native";
import { Layout, Text, Icon } from "@ui-kitten/components";

import {
  LikeButton,
  FavButton,
  DownloadButton,
} from "../../../components/Icons/Icons";
import PodCard from "../../../components/PodCard.js";
import PlayerControls from "./PlayerControls";
import { DownloadItem, ArchiveItem, FavItem, LatestItem } from "./ContentItem";
import { AppContext } from "../../../context/AppContext";
import { EngagementContext } from "../../../context/EngagementContext";

export class Latest extends Component {
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
        <AppContext.Consumer>
          {(appContext) => (
            <EngagementContext.Consumer>
              {(engagementContext) => {
                const catalog = appContext.state.episodes.reflex;

                let latestEpId = Math.max.apply(
                  Math,
                  catalog &&
                    catalog.map((o) => {
                      return o.id;
                    })
                );
                let latestEpisode =
                  catalog &&
                  catalog.find((o) => {
                    return o.id == latestEpId;
                  });
                return (
                  catalog && (
                    <LatestItem
                      audio={audio}
                      epTitle={latestEpisode.title}
                      desc={latestEpisode.description}
                      epNum={`Ep. ${latestEpisode.id}`}
                      ad={latestEpisode.ads}
                      cid={latestEpisode.cid}
                      engagementLoad={engagementContext.state.engagementLoad}
                    />
                  )
                );
              }}
            </EngagementContext.Consumer>
          )}
        </AppContext.Consumer>
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
        backgroundColor: null,
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
              justifyContent: "space-between",
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

export const Archive = ({ layout }) => {
  return (
    <Layout
      style={{
        flex: layout,
        backgroundColor: null,
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
              justifyContent: "space-between",
            }}
          >
            <ScrollView>
              <AppContext.Consumer>
                {(context) => {
                  const catalog = context.state.episodes.reflex;
                  const sortedCatalog = catalog.sort((a, b) =>
                    a.id < b.id ? 1 : -1
                  );

                  return (
                    catalog &&
                    sortedCatalog.map((v, i) => {
                      return (
                        <ArchiveItem
                          key={i}
                          epTitle={v.title}
                          desc={v.description}
                          epNum={v.id}
                        />
                      );
                    })
                  );
                }}
              </AppContext.Consumer>
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
        backgroundColor: null,
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
              justifyContent: "space-between",
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
