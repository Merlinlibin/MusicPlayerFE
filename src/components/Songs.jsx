import React, { useEffect, useState } from "react";
import "../style/Songs.css";
import MediaQuery from "react-responsive";
import SongCard from "./SongCard";
import SongCardMod from "./SongCardMod";
import axios from "axios";
import Player from "./Player";

function Songs() {
  const getSongUrl = "https://musicplayerbackend.onrender.com/api/songs/";
  const [songs, setSongs] = useState([]);
  const [player, setplayer] = useState(false);
  const [childData, setChildData] = useState(null);

  const handleChildData = (data, playSong) => {
    setChildData(data);
    setplayer(playSong);
  };

  const getSongs = async () => {
    try {
      const resp = await axios.get(getSongUrl);
      setSongs(resp.data.data);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  useEffect(() => {
    getSongs();
  }, []);

  console.log(songs);

  return (
    <div className="text-center container">
      <MediaQuery query="(min-width: 575px)">
        <div className="row">
          {songs.map((song) => (
            <SongCard
              key={song._id}
              songData={song}
              onChildData={handleChildData}
              setplayer={setplayer}
            />
          ))}
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 574px)">
        <div className="row">
          <div className="col m-2">
            {songs.map((song) => (
              <SongCardMod
                key={song._id}
                songData={song}
                onChildData={handleChildData}
                setplayer={setplayer}
              />
            ))}
          </div>
        </div>
      </MediaQuery>
      {player && (
        <Player song={childData} player={player} setplayer={setplayer} songs={songs} />
      )}
    </div>
  );
}

export default Songs;
