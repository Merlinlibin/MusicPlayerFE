
import "../style/SongCardMob.css";

function SongCardMod({ songData, onChildData, setplayer }) {
  const sendDataToParent = () => {
    onChildData(songData);
    setplayer(true);
  };

  return (
    <div>
      <div className="my-3 bg-white rounded d-flex align-items-center justify-content-around playCard">
        <img
          className="thumbnail"
          src={songData.imageUrl}
          alt="Card image cap"
        />
        <div className="buttondiv">
          <button className=" likeButtonmob">
            <i className="bi bi-heart-fill"></i>
          </button>
          <button className=" playlistButtonmob">
            <i className="bi bi-plus-square"></i>
          </button>
        </div>
        <div>
          <div>
            <p className="heading m-1">Song Name :</p>
            <h6 className="ms-3">{songData.songname}</h6>
          </div>

          <div>
            <p className="heading m-1">Artist name :</p>
            <p className="artist ms-3">{songData.artistname}</p>
          </div>
        </div>

        <button
          className="btn btn-primary btn-circle btn-sm"
          onClick={sendDataToParent}>
          <i className="bi bi-play"></i>
        </button>
      </div>
    </div>
  );
}

export default SongCardMod;
