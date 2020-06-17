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
        demo: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
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
          const PodCatalogue = doc.data();

          return this.setState({ episodes: PodCatalogue });
          // console.log(
          //   "PodCatalogue => ",
          //   PodCatalogue.reflex.map((i) => {
          //     return i.id;
          //   })
          // )
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
    const {
      isPlaying,
      pauseButtonClicked,
      playbackInstance,
    } = this.state.player;
    console.log("is there playbackInstance ?", Boolean(playbackInstance));
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
      const { player, playbackInstance } = this.state.player;

      try {
        const playbackInstance = new Audio.Sound();
        const source = {
          uri: src,
        };

        const status = {
          shouldPlay: this.state.isPlaying,
          volume: this.state.volume,
        };
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
    const handlePlay = async () => {
      const { playbackInstance, isPlaying } = this.state.player;

      await playbackInstance.playAsync().then(
        this.setState((prevState) => ({
          stopAvailable: true,
          player: {
            ...prevState.player,
            isPlaying: true,
            pauseButtonClicked: !pauseButtonClicked,

            // playButton: true,
          },
        }))
        // console.log("playbackInstance @ playpause", playbackInstance),
        // console.log("isPlaying @ playpause", isPlaying)
      );
    };
    const handlePause = async () => {
      const { playbackInstance, isPlaying } = this.state.player;
      await playbackInstance.pauseAsync().then(
        this.setState((prevState) => ({
          player: {
            ...prevState.player,
            pauseButtonClicked: !pauseButtonClicked,
          },
        }))
      );
    };

    // const handlePlayPause = async () => {
    //   const { playbackInstance, isPlaying } = this.state.player;
    //   console.log("isPlaying ?", Boolean(isPlaying));

    //   isPlaying
    //     ?
    //     :
    // };

    const handleStop = async () => {
      const { playbackInstance, demo } = this.state.player;

      try {
        await playbackInstance.unloadAsync();

        this.setState((prevState) => ({
          stopAvailable: false,
          player: {
            ...prevState.player,
            playButton: false,
            isPlaying: false,
            pauseButtonClicked: false,
          },
        }));
        setUpAudio(demo);
      } catch (error) {
        console.log("Audio Setup", error);
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
          handlePlay: handlePlay,
          handlePause: handlePause,
          handleStop: handleStop,
          togglePauseButton: togglePauseButton,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
