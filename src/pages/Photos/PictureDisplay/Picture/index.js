import React from "react";
import "./style.css";

export default function Picture(props) {
  return (
    <div className="searched_divs">
      <a href={props.pageURL} target="_blank">
        <img
          className="searched_pics"
          src={props.previewURL}
          alt="image description not found"
        />
      </a>
    </div>
  );
}
