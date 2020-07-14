import { createContext } from "react";

const AppContext = createContext({
  infoSection: false,
  adSection: false,
  episodes: null,
  latestEpisode: null,
  user: null,
  episodePlaying: false,
});

export default AppContext;
