import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Text, Spinner, Layout } from "@ui-kitten/components";
import { Audio } from "expo-av";
import AppContext from "../../../../context/AppContext";

Audio.setAudioModeAsync({
  allowsRecordingIOS: false,
  interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
  playsInSilentModeIOS: true,
  shouldDuckAndroid: true,
  interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
  playThroughEarpieceAndroid: false,
});

export default PlayerControls = ({ size, margins, src }) => {
  const { state, dispatch } = useContext(AppContext);
  const {
    playbackInstance,
    volume,
    isPlaying,
    pauseButtonClicked,
    demo,
  } = state;

  // const [player, setPlayer] = useState({
  //   demo: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  //   playbackInstance: null,
  //   isPlaying: false,
  //   volume: 1.0,
  //   playButton: false,
  //   pauseButtonClicked: false,
  //   isBuffering: null,
  // });

  useEffect(() => {
    if (!playbackInstance) {
      setUpAudio(demo);
    }
    // if using database
    //if (!player.playbackInstance) {
    //   src && setUpAudio(src);
    // }
  }, [isPlaying]);

  const handleStop = async (src) => {
    playbackInstance.unloadAsync();
    dispatch({
      type: "PLAYBACK_CLEAR",
    });
  };

  const handlePause = async () => {
    await playbackInstance.pauseAsync().then(
      dispatch({
        type: "PLAYBACK_PAUSE",
        payload: !pauseButtonClicked,
      })
    );
  };

  const handlePlay = async () => {
    await playbackInstance.playAsync().then(
      dispatch({
        type: "PLAYBACK_PLAYING",
        payload: !pauseButtonClicked,
      })

      // console.log("playbackInstance @ playpause", playbackInstance),
      // console.log("isPlaying @ playpause", isPlaying)
    );
  };

  const onPlaybackStatusUpdate = (status) => {
    dispatch({
      type: "UPDATE_PLAYBACK_BUFFERING",
      payload: status.isBuffering,
    });
  };

  const setUpAudio = async (src) => {
    //    const { isPlaying, volume } = player;
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
      await playbackInstance.loadAsync(source, status, false).then(() =>
        dispatch({
          type: "UPDATE_PLAYBACK",
          payload: playbackInstance,
        })
      );
    } catch (e) {
      console.error(e);
    }
  };

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

        {/* {DONT DELETE */}

        {isPlaying ? (
          <View>
            <Icon
              name="stop-circle"
              onPress={async () => {
                await handleStop(demo);
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
    )
  );
};
