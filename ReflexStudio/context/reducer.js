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

    //player
    case "UPDATE_PLAYBACK":
      return {
        ...state,
        playbackInstance: payload,
      };
    case "UPDATE_PLAYBACK_BUFFERING":
      return {
        ...state,
        isBuffering: payload,
      };
    case "PLAYBACK_PLAYING":
      return {
        ...state,
        isPlaying: true,
        pauseButtonClicked: payload,
      };
    case "PLAYBACK_PAUSE":
      return {
        ...state,
        pauseButtonClicked: payload,
      };
    case "PLAYBACK_CLEAR":
      return {
        ...state,
        playButton: false,
        isPlaying: false,
        pauseButtonClicked: false,
        playbackInstance: null,
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
