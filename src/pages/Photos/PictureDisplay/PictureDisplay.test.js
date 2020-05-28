import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PictureDisplay from "./index";
import Picture from "./Picture";

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

it("tests reset button", () => {
  let resetSearch = jest.fn();

  act(() => {
    render(<PictureDisplay images={[]} resetSearch={resetSearch} />, container);
  });
  const button = document.querySelector("[data-testid=search_again]");
  expect(button.innerHTML).toBe("Search for something else");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(resetSearch).toHaveBeenCalledTimes(1);
});
