import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import SearchPictures from "./SearchPictures";
import PictureDisplay from "./PictureDisplay";
import API from "../../API/api";
import "./Photos.css";

export default function Photos() {
  let [images, setImages] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");
  let [error, setError] = useState("");

  function handleClick(event) {
    event.preventDefault();
    if (searchQuery.length === 0) {
      setSearchQuery("random stuff");
    }
    loadPictures(searchQuery);
  }

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  function loadPictures(searchName) {
    API.getPictures(searchName)
      .then((res) => {
        setImages(res.data.hits);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    console.log(images);
  });

  return !images.length ? (
    <SearchPictures
      searchQuery={searchQuery}
      handleInputChange={handleInputChange}
      handleClick={handleClick}
    />
  ) : (
    <PictureDisplay searchQuery={searchQuery} images={images} />
  );
}
