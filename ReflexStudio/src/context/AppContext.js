import React, { Component } from "react";
import firebase from "../../firebase";
import "@firebase/firestore";
import { Audio } from "expo-av";

export const AppContext = React.createContext();

const db = firebase.firestore();
const nid = {
  reflex: "sToBbV6lqw2H62vS9UyU",
};
const networkRef = db.collection("network").doc(nid.reflex);

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: {},
      infoSection: false,
      adSection: false,
      player: {
        playbackInstance: null,
        isPlaying: false,
        volume: 1.0,
        playButton: false,
        pauseButtonClicked: false,
        nextTrackClicked: false,
        prevTrackClicked: false,
        playbackInstance: null,
      },
    };
  }

  async componentDidMount() {
    try {
      //get
      await networkRef.get().then((doc) => {
        if (doc.exists) {
          const reflexPodCatalogue = doc.data();

          return (
            this.setState({ episodes: reflexPodCatalogue }),
            console.log("network id => ", nid.reflex),
            console.log("Document => ", this.state.episodes.ep1.title)
          );
        } else {
          console.log("No such document!");
        }
      });

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: false,
      });
    } catch (error) {
      console.log("err", error);
    }
  }

  render() {
    const { isPlaying, pauseButtonClicked } = this.state.player;
    const openInfo = () => {
      this.setState({ infoSection: true });
    };
    const closeInfo = () => {
      this.setState({ infoSection: false });
    };
    const openAd = () => {
      this.setState({ adSection: true });
    };
    const closeAd = () => {
      this.setState({ adSection: false });
    };

    const flipIsPlaying = () => {
      this.setState({ isPlaying: !isPlaying });
    };

    const playerActive = () => {
      this.setState({ isPlaying: true });
    };

    const playerInactive = () => {
      this.setState({ isPlaying: false });
    };

    const togglePauseButton = () => {
      this.setState({ pauseButtonClicked: !pauseButtonClicked });
    };

    const setUpAudio = async (src) => {
      const { player } = this.state.player;
      try {
        const playbackInstance = new Audio.Sound();
        const source = {
          uri: src,
        };

        const status = {
          shouldPlay: this.state.isPlaying,
          volume: this.state.volume,
        };
        //TODO - make the audio player work regardless of position in app
        playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
        await playbackInstance.loadAsync(source, status, false);
        this.setState((prevState) => ({
          player: {
            ...prevState.player,
            playbackInstance: playbackInstance,
          },
        }));
      } catch (e) {
        console.log(e);
      }
    };

    const onPlaybackStatusUpdate = (status) => {
      this.setState({
        isBuffering: status.isBuffering,
      });
    };

    const handlePlayPause = async () => {
      const { playbackInstance, isPlaying } = this.state.player;
      isPlaying
        ? await playbackInstance.pauseAsync().then(
            this.setState((prevState) => ({
              player: {
                ...prevState.player,
                pauseButtonClicked: !pauseButtonClicked,
              },
            }))
          )
        : await playbackInstance.playAsync().then(
            this.setState((prevState) => ({
              stopAvailable: true,
              player: {
                ...prevState.player,
                isPlaying: true,
                // playButton: true,
              },
            }))
          );
    };

    const handleStop = async () => {
      const { playbackInstance } = this.state.player;

      try {
        await playbackInstance.unloadAsync();
        playerInactive();

        this.setState((prevState) => ({
          stopAvailable: false,
          player: {
            ...prevState.player,
            playButton: false,
            pauseButtonClicked: false,
          },
        }));

        setUpAudio();
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <AppContext.Provider
        value={{
          state: this.state,
          openInfo: openInfo,
          closeInfo: closeInfo,
          openAd: openAd,
          closeAd: closeAd,
          playerActive: playerActive,
          playerInactive: playerInactive,
          flipIsPlaying: flipIsPlaying,
          setUpAudio: setUpAudio,
          onPlaybackStatusUpdate: onPlaybackStatusUpdate,
          handlePlayPause: handlePlayPause,
          handleStop: handleStop,
          togglePauseButton: togglePauseButton,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
