import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PictureDisplay from "./index";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with one image", () => {
  act(() => {
    let images = [
      {
        pageURL: "",
        previewURL: "",
      },
    ];
    render(<PictureDisplay images={images} />, container);
  });
});

it("renders with no images", () => {
  act(() => {
    let images = [];
    render(<PictureDisplay images={images} />, container);
  });
});

it("renders with multiple images", () => {
  act(() => {
    let images = [
      {
        pageURL: "",
        previewURL: "",
      },
      {
        pageURL: "",
        previewURL: "",
      },
      {
        pageURL: "",
        previewURL: "",
      },
    ];
    render(<PictureDisplay images={images} />, container);
  });
});
