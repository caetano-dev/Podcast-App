import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Text, Spinner, Layout } from "@ui-kitten/components";
import { Audio } from "expo-av";
import AppContext from "../../../../context/AppContext";

export default PlayerControls = ({ size, margins, src }) => {
  const { state, dispatch } = useContext(AppContext);
  const [player, setPlayer] = useState({
    demo: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    playbackInstance: null,
    isPlaying: false,
    volume: 1.0,
    playButton: false,
    pauseButtonClicked: false,
    nextTrackClicked: false,
    prevTrackClicked: false,
    playbackInstance: null,
    isBuffering: null,
  });

  useEffect(() => {
    src && setUpAudio(src);
    // pauseButtonClicked ? null : setUpAudio(src);
    // playbackInstance ? null : setUpAudio(src);
  }, []);

  const handleStop = async (src) => {
    const { playbackInstance, demo } = player;

    try {
      await playbackInstance.unloadAsync();

      setPlayer((prevState) => ({
        ...prevState,
        playButton: false,
        isPlaying: false,
        pauseButtonClicked: false,
        playbackInstance: null,
      }));
    } catch (error) {
      console.log("Audio Setup", error);
    }
  };

  const handlePause = async () => {
    const { playbackInstance, isPlaying, pauseButtonClicked } = player;
    await playbackInstance.pauseAsync().then(
      setPlayer((prevState) => ({
        ...prevState,
        pauseButtonClicked: !pauseButtonClicked,
      }))
    );
  };

  const handlePlay = async () => {
    const { playbackInstance, isPlaying, pauseButtonClicked } = player;
    await playbackInstance.playAsync().then(
      setPlayer((prevState) => ({
        ...prevState,
        isPlaying: true,
        pauseButtonClicked: !pauseButtonClicked,
      }))
      // console.log("playbackInstance @ playpause", playbackInstance),
      // console.log("isPlaying @ playpause", isPlaying)
    );
  };

  const onPlaybackStatusUpdate = (status) => {
    setPlayer((prevState) => ({
      ...prevState,
      isBuffering: status.isBuffering,
    }));
  };

  const setUpAudio = async (src) => {
    const { isPlaying, volume } = player;

    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: src,
      };

      const status = {
        shouldPlay: isPlaying,
        volume: volume,
      };
      playbackInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);

      setPlayer((prevState) => ({
        ...prevState,
        playbackInstance: playbackInstance,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
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

      {/* {DONT DELETE */}

      {player.isPlaying ? (
        <View>
          <Icon
            name="stop-circle"
            onPress={() => {
              handleStop(src);
            }}
            style={{ height: size, width: size }}
          />
        </View>
      ) : null}

      <View>
        {player.isPlaying ? (
          player.pauseButtonClicked ? (
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

      {/* {DONT DELETE */}

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
  );
};
