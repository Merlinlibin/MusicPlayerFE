import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./style/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid main">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
