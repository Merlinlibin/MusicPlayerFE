import React from "react";
import "../style/Header.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between py-3 header ">
        <h1 className=""> 🎧🎙️🎹</h1>
        <div className="w-5">
          <Router>
            <Link to={"/login"} className="btn btn-primary mx-2">
              Login
            </Link>
            <Link to={"/Signup"} className="btn btn-primary mx-2">
              Signup
            </Link>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default Header;
