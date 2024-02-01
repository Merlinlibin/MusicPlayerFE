import React, { useEffect, useRef, useState } from "react";
import "../style/Player.css";
import "@fortawesome/fontawesome-free/css/all.css";

function Player({ song, songs, setplayer }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentSong, setCurrentSong] = useState(song);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;

    // Update duration once metadata is loaded
    const handleduration = () => {
      setDuration(audioElement.duration);
    };

    // Update current time as audio plays
    const handlecurrenttime = () => {
      setCurrentTime(audioElement.currentTime);
    };

    // Set up event listeners
    audioElement.addEventListener("loadedmetadata", handleduration);
    audioElement.addEventListener("timeupdate", handlecurrenttime);

    // Clean up event listeners on component unmount
    return () => {
      audioElement.removeEventListener("loadedmetadata", handleduration);
      audioElement.removeEventListener("timeupdate", handlecurrenttime);
    };
  }, []);

  const handleSeek = (value) => {
    const audioElement = audioRef.current;
    audioElement.currentTime = value;
    setCurrentTime(value);
  };

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
  const handleMute = () => {
    isMute
      ? (setIsMute(false), (audioRef.current.volume = 0.5), setVolume(0.5))
      : (setIsMute(true), (audioRef.current.volume = 0), setVolume(0));
  };

  const closeplayer = () => {
    setplayer(false);
  };

  const playNextTrack = () => {
    const nextSong = songs.find((song) => {
      if (currentSong._id == song._id) {
        return songs;
      }
    });
    if (songs.indexOf(nextSong) + 1 === songs.length) {
      setCurrentSong(songs[songs.indexOf(nextSong)]);
    } else {
      setCurrentSong(songs[songs.indexOf(nextSong) + 1]);
    }
  };

  const playPreviousTrack = () => {
    const perviousSong = songs.find((song) => {
      if (currentSong._id == song._id) {
        return songs;
      }
    });
    if (songs.indexOf(perviousSong) === 0) {
      setCurrentSong(songs[songs.indexOf(perviousSong)]);
    } else {
      setCurrentSong(songs[songs.indexOf(perviousSong) - 1]);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="song-popup hide">
      <a className="closeButton" onClick={closeplayer}>
        x
      </a>
      {/* <!-- Song --> */}
      <div className="imgcontainer">
        <img src={currentSong.imageUrl} alt="Album art" />
      </div>
      <h2 id="title">{currentSong.songname}</h2>
      <h3 id="artist">{currentSong.artistname}</h3>
      <audio src={currentSong.songUrl} autoPlay ref={audioRef}></audio>
      {/* <!-- Progress bar --> */}
      <div className="progress-container" id="progress-container">
        <input
          type="range"
          className="progress"
          value={currentTime}
          max={duration}
          onChange={(e) => handleSeek(e.target.value)}
        />
        <div className="duration-wrapper">
          <span id="current-time">
            {`${Math.floor(currentTime / 60)
              .toString()
              .padStart(2, "0")}:${Math.floor(currentTime % 60)
              .toString()
              .padStart(2, "0")}`}
          </span>
          <span id="duration">{`${Math.floor(duration / 60)
            .toString()
            .padStart(2, "0")}:${Math.floor(duration % 60)
            .toString()
            .padStart(2, "0")}`}</span>
        </div>
      </div>
      {/* <!-- Controls --> */}
      <div className="player-controls">
        <i
          className="fas fa-backward"
          onClick={playPreviousTrack}
          id="prev"
          title="Previous"></i>
        <i
          className={
            isPlaying
              ? "fas fa-play-circle main-button"
              : "fas fa-pause-circle main-button"
          }
          id="play"
          title="Play"
          onClick={playPauseHandler}></i>
        <i
          className="fas fa-forward"
          onClick={playNextTrack}
          id="next"
          title="Next"></i>
      </div>
      {/* <!-- Volume Controls --> */}
      <div className="volume-controls">
        <i
          className={
            isMute
              ? "fas fa-volume-mute volume-btn "
              : "fas fa-volume-up volume-btn"
          }
          title="Mute"
          onClick={handleMute}></i>

        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default Player;
