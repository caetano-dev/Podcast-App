import React, { useState, Component, useContext, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
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
import { Audio } from "expo-av";

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
        <LatestItem />
      </Layout>
    );
  }
}

export default Latest;

export const Archive = ({ layout }) => {
  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const catalog = state.episodes;
  const ordered = catalog.sort((a, b) => (a.id < b.id ? 1 : -1));

  const startAudioProcess = async (src) => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: src },
      {
        shouldPlay: true,
        isLooping: false,
      },
      handleStatusUpdate
    );
    dispatch({ type: "PLAYER_ACTIVE", payload: sound });
    //here

    //this.sound = sound;
  };

  const onPlayPause = (src, title, id, cid, archivePlayerLoading) => {
    console.log(`Player started title: ${title} | cid: ${cid} | id: ${id}`);
    switch (state.playingStatus) {
      case "noaudio":
      case "stopped":
        setLoading(true);
        startAudioProcess(src);
        dispatch({
          type: "ARCHIVE_PLAYER_STATUS",
          payload: archivePlayerLoading,
        });
        dispatch({
          type: "UPDATE_MEDIA_CONTROL",
          payload: cid,
        });
        dispatch({
          type: "UPDATE_ARCHIVE_PLAYER_DATA",
          payload: { title: title, id: id },
        });
        dispatch({
          type: "ARCHIVE_PLAYER_STATUS",
          payload: !archivePlayerLoading,
        });
        break;
      case "donepause":
      case "playing":
        if (state.currentMediaLoaded !== cid) {
          console.log("issue");
          //to clear state and start a new audio process
          setLoading(false);
          handleClearRestore(src, title, id, cid, archivePlayerLoading);
        } else {
          handlePlayPause();
        }
        break;
    }
  };

  const handleClearRestore = async (
    src,
    title,
    id,
    cid,
    archivePlayerLoading
  ) => {
    await state.playbackInstance.stopAsync();

    setLoading(true);
    startAudioProcess(src);
    dispatch({
      type: "ARCHIVE_PLAYER_STATUS",
      payload: archivePlayerLoading,
    });
    dispatch({
      type: "UPDATE_MEDIA_CONTROL",
      payload: cid,
    });
    dispatch({
      type: "UPDATE_ARCHIVE_PLAYER_DATA",
      payload: { title: title, id: id },
    });
    dispatch({
      type: "ARCHIVE_PLAYER_STATUS",
      payload: !archivePlayerLoading,
    });
  };
  const handlePlayPause = async () => {
    if (state.playbackInstance != null) {
      if (state.playingStatus == "playing") {
        //pause here
        dispatch({
          type: "UPDATE_PLAYER_STATUS",
          payload: "donepause",
        });
        await state.playbackInstance.pauseAsync();
      } else {
        //play here
        await state.playbackInstance.playAsync();

        dispatch({
          type: "UPDATE_PLAYER_STATUS",
          payload: "playing",
        });
      }
    }
  };

  const handleStop = async () => {
    if (state.playbackInstance != null) {
      await state.playbackInstance.stopAsync();
      dispatch({
        type: "UPDATE_PLAYER_STATUS",
        payload: "stopped",
      });
      dispatch({
        type: "UPDATE_MEDIA_CONTROL",
        payload: null,
      });
      dispatch({
        type: "UPDATE_ARCHIVE_PLAYER_DATA",
        payload: null,
      });
    }
  };

  const handleStatusUpdate = (status) => {
    if (status.isPlaying && state.playingStatus !== "playing") {
      dispatch({
        type: "UPDATE_PLAYER_STATUS",
        payload: "playing",
      });
      setLoading(false);
    } else if (!status.isPlaying && state.playingStatus === "playing") {
      dispatch({
        type: "UPDATE_PLAYER_STATUS",
        payload: "donepause",
      });
    }
  };
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
              <Text
                category="label"
                status="primary"
                style={{ alignSelf: "center" }}
              >
                Click an episode to play
              </Text>
              {ordered.map((v, i) => {
                return (
                  <ArchiveItem
                    podBGColor={"lightblue"}
                    onPress={(src, title, id, cid, archivePlayerLoading) =>
                      //state.demo,
                      onPlayPause(v.url, v.title, v.id, v.cid, true)
                    }
                    cid={v.cid}
                    key={i}
                    epTitle={v.title}
                    epNum={v.id}
                    src={v.url}
                    desc={v.description}
                  />
                );
              })}
            </ScrollView>
          </Layout>
        }
      />
    </Layout>
  );
};

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
        bgColor={"gray"}
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
              <Text style={styles.text} category="h6" status="control">
                Favourited content here
              </Text>
              {/* <FavItem epTitle={epTitle} desc={desc} epNum={epNum} /> */}
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
        bgColor={"gray"}
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
              <Text style={styles.text} category="h6" status="control">
                Downloaded content here
              </Text>
              {/* <DownloadItem epTitle={epTitle} desc={desc} epNum={epNum} /> */}
            </ScrollView>
          </Layout>
        }
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    margin: 10,
  },
});
