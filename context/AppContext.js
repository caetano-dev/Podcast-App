import { createContext } from "react";

const AppContext = createContext({
  infoSection: false,
  adSection: false,
  episodes: null,
  latestEpisode: null,
  user: null,
  episodePlaying: false,
  //player
  playingStatus: "noaudio",
  playbackInstance: null,
  demo: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  //media Controller
  currentMediaLoaded: null,
  archivePlayerObj: null,
  archivePlayerLoading: false,
});

export default AppContext;
