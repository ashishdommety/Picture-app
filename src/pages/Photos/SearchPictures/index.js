import React from "react";
import Navbar from "../../Navbar";
import "./style.css";

export default function SearchPictures(props) {
  return (
    <div>
      <Navbar />
      <div id="search_section">
        <h4 className="search_title">Search below:</h4>
        <hr />
        <form>
          <input
            id="search_input"
            value={props.searchQuery}
            onChange={props.handleInputChange}
            placeholder="type search value here"
            name="search"
            type="text"
          />
          <button id="search_button" onClick={props.handleClick}>
            Get Pictures
          </button>
          <span className="error_message">{props.error}</span>
        </form>
      </div>
    </div>
  );
}
