import React, { useState } from "react";
import Navbar from "../Navbar";
import API from "../../API/api";
import "./style.css";

export default function Photos() {
  let [images, setImages] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");
  let [error, setError] = useState("");

  function handleClick(event) {
    event.preventDefault();
    if (searchQuery.length > 0) {
      loadPictures(searchQuery);
    } else {
      setError("Input can't be empty");
    }
  }

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  function loadPictures(searchName) {
    API.getPictures(searchName)
      .then((res) => {
        if (res.data.hits.length > 0) {
          setImages(res.data.hits);
        } else {
          setError("No images found.");
        }
      })
      .catch((err) => setError("Network Error"));
  }

  function resetSearch() {
    setImages([]);
    setSearchQuery("");
  }

  return !images.length ? (
    <div>
      <Navbar />
      <div id="search_form">
        <h4 className="search_title">Search below:</h4>
        <hr />
        <form>
          <input
            id="search_input"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="search for..."
            name="search"
            type="text"
            data-testid="search_input"
          />
          <button
            id="search_button"
            data-testid="search_button"
            onClick={handleClick}
          >
            Get Pictures
          </button>
          <span className="error_message" data-testid="error_message">
            {error}
          </span>
        </form>
      </div>
    </div>
  ) : (
    <div>
      <Navbar />
      <div id="search_section">
        <h3 className="search_title"> Pictures of {searchQuery} </h3>
        <hr />
        <div className="all_images">
          {images.map((image, index) => (
            <div key={index}>
              <a href={image.pageURL} target="_blank" rel="noopener noreferrer">
                <img
                  className="pic"
                  src={image.previewURL}
                  alt="item to be shown"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <button
        className="re_search"
        data-testid="search_again"
        onClick={() => resetSearch([])}
      >
        Search for something else
      </button>
    </div>
  );
}
