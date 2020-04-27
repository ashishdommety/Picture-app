import React from "react";
import "./style.css";

export default function Picture(props) {
  return (
    <div>
      <a href={props.pageURL} target="_blank">
        <img
          className="pic"
          src={props.previewURL}
          alt="image description not found"
        />
      </a>
    </div>
  );
}
