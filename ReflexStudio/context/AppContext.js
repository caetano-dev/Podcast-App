import { createContext } from "react";

const AppContext = createContext({
  user: null,
  episodes: {},
  infoSection: false,
  adSection: false,
});

export default AppContext;
