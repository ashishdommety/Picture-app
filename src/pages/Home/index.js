import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_content">
      <h1>Picture Time</h1>
      <hr />
      <h4> A place to look for any picture.</h4>
      <Link to="/photos">
        <button id="goto_search">Search for Pictures</button>
      </Link>
    </div>
  );
}

export default Home;
