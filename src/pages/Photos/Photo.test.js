import React from "react";

import { render, fireEvent, act, waitForElement } from "@testing-library/react";
import Photos from "./index";
import "@testing-library/jest-dom";
import API from "../../API/api";
import axios from "axios";
import testData from "../../API/testData.json";

jest.mock("axios");

let container = null;
beforeEach(() => {
  jest.restoreAllMocks();
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  jest.clearAllMocks();
  document.getElementsByTagName("html")[0].innerHTML = "";
});

describe("Photos:", () => {
  it("renders with get search picture button", () => {
    const { getByTestId } = render(<Photos />, container);
    expect(getByTestId("search_input").textContent).toBe("");
    expect(getByTestId("search_button").textContent).toBe("Get Pictures");
  });

  it("should throw error if input is empty", async () => {
    const { getByTestId, getByText } = render(<Photos />, container);
    fireEvent.change(getByTestId("search_input"), {
      target: { value: "" },
    });

    fireEvent.click(getByTestId("search_button"));

    expect(getByText("Input can't be empty")).toBeInTheDocument();
  });

  it("should update input", async () => {
    const { getByTestId } = render(<Photos />, container);
    fireEvent.change(getByTestId("search_input"), {
      target: { value: "apples" },
    });

    expect(getByTestId("search_input").value).toBe("apples");
  });

  // should assert for valid search
  it("should respond with images when input is valid", async () => {
    // setup
    const { getByTestId, findByText } = render(<Photos />, container);
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, data: testData })
    );
    const spy = jest.spyOn(API, "getPictures");
    // do stuff
    fireEvent.change(getByTestId("search_input"), {
      target: { value: "apples" },
    });
    fireEvent.click(getByTestId("search_button"));
    // make assertions
    expect(spy).toHaveBeenCalledTimes(1);
    const responseTitle = await findByText("Pictures of apples");
    expect(responseTitle).toBeInTheDocument();
  });

  // should assert for empty response
  it("should respond with error when input is invalid", async () => {
    // setup
    const { getByTestId, findByText } = render(<Photos />, container);
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, data: { hits: [] } })
    );
    const spy = jest.spyOn(API, "getPictures");
    // do stuff
    fireEvent.change(getByTestId("search_input"), {
      target: { value: "apples" },
    });
    fireEvent.click(getByTestId("search_button"));
    // make assertions
    expect(spy).toHaveBeenCalledTimes(1);
    const responseTitle = await findByText("No images found.");
    expect(responseTitle).toBeInTheDocument();
  });

  // should assert for network error
  it("should respond with network error if promise failed", async () => {
    // setup
    const { getByTestId, findByText } = render(<Photos />, container);
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error("Network Error"))
    );
    const spy = jest.spyOn(API, "getPictures");
    // do stuff
    fireEvent.change(getByTestId("search_input"), {
      target: { value: "apples" },
    });
    fireEvent.click(getByTestId("search_button"));
    // make assertions
    expect(spy).toHaveBeenCalledTimes(1);
    const responseTitle = await findByText("Network Error");
    expect(responseTitle).toBeInTheDocument();
  });

  // should re-route back to search page if reset button is clicked
  it("should re-route back to search page when reset button is clicked", async () => {
    // setup
    const { getByTestId, findByText } = render(<Photos />, container);
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, data: testData })
    );
    const spy = jest.spyOn(API, "getPictures");
    // do stuff
    fireEvent.change(getByTestId("search_input"), {
      target: { value: "apples" },
    });
    fireEvent.click(getByTestId("search_button"));
    // make assertions
    expect(spy).toHaveBeenCalledTimes(1);
    const responseTitle = await findByText("Pictures of apples");
    expect(responseTitle).toBeInTheDocument();
    expect(await findByText("Search for something else")).toBeInTheDocument();
    // do stuff again
    fireEvent.click(getByTestId("search_again"));
    // assert again
    expect(responseTitle).not.toBeInTheDocument();
  });
});
