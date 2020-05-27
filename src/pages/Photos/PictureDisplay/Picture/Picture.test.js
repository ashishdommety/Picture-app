import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Picture from "./index";

configure({ adapter: new Adapter() });

describe("<Picture/>", () => {
  it("renders all elements in Picture Component", () => {
    const picture = shallow(<Picture />);
    expect(picture.find("div").length).toEqual(1);
    expect(picture.find("a").length).toEqual(1);
    expect(picture.find("img").length).toEqual(1);
  });
});
