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
  isPlaying: null,
  playbackInstance: null,
  pauseButtonClicked: null,
  volume: 1.0,
  isBuffering: null,
  //player controller
  //used to dictate the currently playing ep (cid is the measure)
  currPlayingMedia: null,
});

export default AppContext;
