import React, { useState } from "react";
import "../style/Main.css";
import Songs from "./Songs";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Main() {
  return (
    <Router>
      <div id="mySidenav" className="sidenav">
        <Link id="about" to={"/user/playlist"}>
          {" "}
          Playlist <i className="bi bi-file-earmark-music mx-3"></i>
        </Link>
        <Link id="blog" to={"/user/liked_songs"}>
          {" "}
          Liked Songs <i className="bi bi-heart mx-3"></i>
        </Link>

        <div className="d-flexalign-items-center  text-center m-5">
          <input type="text" className="w-75 m-2 search" />
          <button className="searchButton">
            Search <i className="bi bi-search"></i>
          </button>
        </div>
        <Songs />
      </div>
      <Progress />
    </Router>
  );
}

export default Main;
