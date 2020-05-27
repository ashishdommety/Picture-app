import API from "./api";
import axios from "axios";
import testData from "./testData.json";

jest.mock("axios");

describe("Fetch images from pixabay", () => {
  it("fetches data successfully from an API", async () => {
    let data = testData;

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(API.getPictures("apples")).resolves.toEqual(data);
  });

  it("fetches erroneous data from the API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() => {
      Promise.reject(new Error(errorMessage));
    });

    await expect(API.getPictures("apples")).toBe(undefined);
  });
});
