import { createContext } from "react";

const AppContext = createContext({
  user: null,
  infoSection: false,
  adSection: false,
  episodes: {},
  latestEpisode: null,
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
});

export default AppContext;
