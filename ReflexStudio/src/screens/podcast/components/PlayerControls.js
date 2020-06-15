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
  togglePauseButton,
  flipIsPlaying,
  pauseButtonClicked,
  testUrl,
}) => {
  useEffect(() => {
    pauseButtonClicked ? null : setUpAudio(testUrl);
  }, [pauseButtonClicked]);

  return (
    <AppContext.Consumer>
      {(context) => {
        const {
          isPlaying,
          playButton,
          pauseButtonClicked,
          playbackInstance,
        } = context.state.player;
        console.log("isPlaying =>", isPlaying);
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
                      name="play-circle"
                      onPress={() => {
                        handlePlayPause();
                      }}
                      style={{
                        height: size,
                        width: size,
                      }}
                    />
                  ) : (
                    <Icon
                      name="pause-circle"
                      onPress={() => {
                        handlePlayPause();
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
                      handlePlayPause();
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
