import { createContext } from "react";

const AppContext = createContext({
  infoSection: false,
  adSection: false,
  episodes: null,
  latestEpisode: null,
  user: null,
  episodePlaying: false,
  //player
  demo: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  playbackInstance: null,
  isPlaying: false,
  volume: 1.0,
  playButton: false,
  pauseButtonClicked: false,
  isBuffering: null,
});

export default AppContext;
