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

it("renders", () => {
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