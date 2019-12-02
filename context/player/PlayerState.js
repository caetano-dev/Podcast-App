import React from "react";
import PlayerContext from "./PlayerContext";

const PlayerState = props => {
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: true
  };

  //

  return (
    <PlayerContext.Provider
      value={{
        isPlaying: state.isPlaying,
        playbackInstance: state.playbackInstance,
        currentIndex: state.currentIndex,
        volume: state.volume,
        isBuffering: state.isBuffering
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
