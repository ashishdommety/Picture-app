import React from "react";
import "./style.css";

function Home() {
  return (
    <div className="home_content">
      <h1>Picture Time</h1>
      <hr />
      <h4> A place to look for any picture.</h4>
      <a href="/photos">
        <button id="goto_search">Search for Pictures</button>
      </a>
    </div>
  );
}

export default Home;
