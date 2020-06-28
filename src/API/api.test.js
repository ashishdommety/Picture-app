import API from "./api";
import axios from "axios";
import testData from "./testData.json";

jest.mock("axios");

beforeEach(() => {
  jest.restoreAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Fetch images from pixabay", () => {
  it("fetches data successfully from an API", async () => {
    let data = testData;

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, data: testData })
    );
    await expect(API.getPictures("apples")).resolves.toEqual({
      status: 200,
      data: testData,
    });
  });

  it("fetches erroneous data from the API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() => {
      return Promise.reject(new Error(errorMessage));
    });

    await expect(API.getPictures("apples")).rejects.toThrowError(
      new Error(errorMessage)
    );
  });
});
