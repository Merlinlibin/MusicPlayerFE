import React, { useRef, useState } from "react";
import "../style/SongCard.css";

function SongCard({ songData, onChildData, setplayer }) {
  const sendDataToParent = () => {
    onChildData(songData);
    setplayer(true);
    
  };

  return (
    <div className="col-lg-3 col-sm-4">
      <div className="my-3 mx-1 card playCard">
        <img
          className="songImage"
          src={songData.imageUrl}
          alt="Card image cap"
        />
        <div className="body">
          <h6>Song Name :</h6>
          <h4>{songData.songname}</h4>
          <h6 className="mt-1">Artist Name:</h6>
          <h5>{songData.artistname}</h5>
          <a className="btn btn-primary playButton" onClick={sendDataToParent}>
            <i className="bi bi-play"></i>
          </a>
          <a className=" likeButton">
            <i className="bi bi-heart-fill"></i>
          </a>
          <a className=" playlistButton">
            <i className="bi bi-plus-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
