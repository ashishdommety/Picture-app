import React, { useState, useEffect } from "react";
import SearchPictures from "./SearchPictures";
import PictureDisplay from "./PictureDisplay";
import API from "../../API/api";

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
      .catch((err) => console.log(err));
  }

  function resetSearch() {
    setImages([]);
    setSearchQuery("");
  }

  return !images.length ? (
    <SearchPictures
      searchQuery={searchQuery}
      handleInputChange={handleInputChange}
      handleClick={handleClick}
      error={error}
    />
  ) : (
    <PictureDisplay
      searchQuery={searchQuery}
      images={images}
      resetSearch={resetSearch}
    />
  );
}
