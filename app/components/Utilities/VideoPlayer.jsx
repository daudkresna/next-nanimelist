"use client";

import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [playerOpen, setPlayerOpen] = useState(true);
  const opts = {
    height: "200",
    width: "400",
  };

  const handlePlayerOpen = () => {
    setPlayerOpen((state) => !state);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-black text-white rounded-full h-8 w-8 float-right my-1"
          onClick={handlePlayerOpen}
        >
          X
        </button>
        <YouTube videoId={youtubeId} opts={opts} />
      </div>
    );
  };

  return playerOpen ? (
    <Player />
  ) : (
    <button
      className="fixed bottom-4 right-4 p-2 rounded-full h-10 w-10 bg-black text-white text-4xl"
      onClick={handlePlayerOpen}
    >
      ^
    </button>
  );
};

export default VideoPlayer;
