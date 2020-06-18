import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Text, Layout } from "@ui-kitten/components";
import { Audio } from "expo-av";
import { AppContext } from "../../../context/AppContext";

export default PlayerControls = ({
  size,
  margins,
  isPlaying,
  setUpAudio,
  onPlaybackStatusUpdate,
  handlePlayPause,
  handleStop,
  playbackInstance,
  togglePauseButton,
  flipIsPlaying,
  demo,
  pauseButtonClicked,
  src,
}) => {
  useEffect(() => {
    pauseButtonClicked ? null : setUpAudio(src);
    playbackInstance ? null : setUpAudio(src);
  }, []);

  return (
    <AppContext.Consumer>
      {(context) => {
        const {
          isPlaying,
          playButton,
          pauseButtonClicked,
          playbackInstance,
        } = context.state.player;
        const { handlePlay, handlePause } = context;
        console.log(
          "playbackInstance from playercontrols",
          Boolean(playbackInstance)
        );
        return (
          playbackInstance && (
            <Layout
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-evenly",
                backgroundColor: null,
                margin: margins,
                alignItems: "center",
              }}
            >
              {/* <View>
          {prevTrackClicked ? (
            <Icon
              name="arrow-left"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ prevTrackClicked: !prevTrackClicked })
              }
            />
          ) : (
            <Icon
              name="arrow-left-outline"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ prevTrackClicked: !prevTrackClicked })
              }
            />
          )}
        </View> */}
              {isPlaying ? (
                <View>
                  <Icon
                    name="stop-circle"
                    onPress={() => {
                      handleStop();
                    }}
                    style={{ height: size, width: size }}
                  />
                </View>
              ) : null}

              <View>
                {isPlaying ? (
                  pauseButtonClicked ? (
                    <Icon
                      name="pause-circle"
                      onPress={() => {
                        handlePause();
                      }}
                      style={{
                        height: size,
                        width: size,
                      }}
                    />
                  ) : (
                    <Icon
                      name="play-circle"
                      onPress={() => {
                        handlePlay();
                      }}
                      style={{
                        height: size,
                        width: size,
                      }}
                    />
                  )
                ) : (
                  <Icon
                    name="play-circle-outline"
                    onPress={() => {
                      handlePlay();
                    }}
                    style={{
                      height: size,
                      width: size,
                    }}
                  />
                )}
              </View>
              {/* <View>
          {nextTrackClicked ? (
            <Icon
              name="arrow-right"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ nextTrackClicked: !nextTrackClicked })
              }
            />
          ) : (
            <Icon
              name="arrow-right-outline"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ nextTrackClicked: !nextTrackClicked })
              }
            />
          )}
        </View> */}
            </Layout>
          )
        );
      }}
    </AppContext.Consumer>
  );
};
