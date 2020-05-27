import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./index";

configure({ adapter: new Adapter() });

describe("<Home/>", () => {
  it("renders all elements on homepage", () => {
    const homepage = shallow(<Home />);
    expect(homepage.find(".home_content").length).toEqual(1);
    expect(homepage.find("h1").length).toEqual(1);
    expect(homepage.find("h4").length).toEqual(1);
    expect(homepage.find("hr").length).toEqual(1);
    expect(homepage.find("#goto_search").length).toEqual(1);
  });
});
