export default function reducer(state, { type, payload }) {
  switch (type) {
    // Auth
    case "GET_USERINFO":
      return {
        ...state,
        user: payload,
      };
    // Catalogue
    case "GET_CATALOGUE":
      return {
        ...state,
        episodes: payload,
      };
    case "GET_LATEST_EPISODE":
      return {
        ...state,
        latestEpisode: payload,
      };

    //buttons
    case "FLIP_INFO":
      return {
        ...state,
        infoSection: payload,
      };
    case "FLIP_ADS":
      return {
        ...state,
        adSection: payload,
      };

    default:
      return state;
  }
}
