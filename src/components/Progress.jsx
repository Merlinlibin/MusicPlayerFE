import React from 'react'
import  { useState, useRef, useEffect } from "react";

function progress() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;

    // Update duration once metadata is loaded
    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
    };

    // Update current time as audio plays
    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    // Set up event listeners
    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioElement.addEventListener('timeupdate', handleTimeUpdate);

    // Clean up event listeners on component unmount
    return () => {
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handlePlayPause = () => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleSeek = (value) => {
    const audioElement = audioRef.current;
    audioElement.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="https://res.cloudinary.com/dewfjhlh5/video/upload/v1706593880/uploades_1706593828003.mp3"
      />
      <div>
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          value={currentTime}
          max={duration}
          onChange={(e) => handleSeek(e.target.value)}
        />
        <span>{`${Math.floor(currentTime)} / ${Math.floor(duration)}`}</span>
      </div>
    </div>
  );
};

export default progress