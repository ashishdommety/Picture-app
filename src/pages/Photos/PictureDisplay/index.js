import React from "react";
import Navbar from "../../Navbar";
import Picture from "./Picture";
import "./style.css";

export default function PictureDisplay(props) {
  return (
    <div>
      <Navbar />
      <div id="search_section">
        <h3 className="search_title"> Pictures of {props.searchQuery} </h3>
        <hr />
        <div className="all_images">
          {!props.images.length ? (
            <p>Pictures do not exist in the db</p>
          ) : (
            props.images.map((image) => (
              <Picture pageURL={image.pageURL} previewURL={image.previewURL} />
            ))
          )}
        </div>
      </div>
      <a href="/photos">
        <button className="re_search">Search for something else</button>
      </a>
    </div>
  );
}