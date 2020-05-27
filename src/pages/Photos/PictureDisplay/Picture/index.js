import React from "react";
import "./style.css";

export default function Picture(props) {
  return (
    <div>
      <a href={props.pageURL} target="_blank" rel="noopener noreferrer">
        <img className="pic" src={props.previewURL} alt="item to be shown" />
      </a>
    </div>
  );
}
