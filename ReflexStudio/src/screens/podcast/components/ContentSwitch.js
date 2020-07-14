import React, { useState, Component, useContext, useEffect } from "react";
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
import AppContext from "../../../../context/AppContext";
//import { EngagementContext } from "../../../context/EngagementContext";

export class Latest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { layout, epTitle, desc, epNum, ad } = this.props;

    //TODO remove LatestItem from ContextItem.js and put it directly
    //     here
    return (
      <Layout
        style={{
          flex: layout,
          backgroundColor: null,
        }}
      >
        {/* <AppContext.Consumer>
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
                  catalog && ( */}
        <LatestItem
          epTitle={"title"}
          desc={"desc"}
          epNum={`Ep. ${"0"}`}
          ad={"ad"}
          cid={"latestEpisode.cid"}
          engagementLoad={"engagementContext.state.engagementLoad"}
          infoSection={"appContext.state.infoSection"}
        />
        {/* )
                );
              }}
            </EngagementContext.Consumer>
          )}
        </AppContext.Consumer> */}
      </Layout>
    );
  }
}

export default Latest;

export const Fav = ({ layout, epTitle, desc, epNum }) => {
  const { state } = useContext(AppContext);

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
  const { state } = useContext(AppContext);
  const catalog = state.episodes;
  const ordered = catalog.sort((a, b) => (a.id < b.id ? 1 : -1));

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
              {ordered.map((v, i) => (
                <ArchiveItem
                  key={i}
                  epTitle={v.title}
                  desc={v.description}
                  epNum={v.id}
                />
              ))}
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
