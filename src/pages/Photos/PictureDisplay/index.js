import React from "react";
import Navbar from "../../Navbar";
import Picture from "./Picture";
import { Link } from "react-router-dom";
import "./style.css";

export default function PictureDisplay(props) {
  console.log(props);
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
            props.images.map((image, index) => (
              <Picture
                key={index}
                pageURL={image.pageURL}
                previewURL={image.webformatURL}
              />
            ))
          )}
        </div>
      </div>
      <button className="re_search" onClick={() => props.resetSearch([])}>
        Search for something else
      </button>
    </div>
  );
}
