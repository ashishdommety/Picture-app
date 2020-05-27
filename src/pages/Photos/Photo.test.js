import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Photos from "./index";

configure({ adapter: new Adapter() });

describe("<Photos/>", () => {
  it("renders all elements on Photospage", () => {
    const Photospage = shallow(<Photos />);
  });
});
