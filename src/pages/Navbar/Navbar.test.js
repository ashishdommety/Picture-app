import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Navbar from "./index";

configure({ adapter: new Adapter() });

describe("<Navbar/>", () => {
  it("renders all elements on Navbar", () => {
    const navbar = shallow(<Navbar />);
    expect(navbar.find(".navigation").length).toEqual(1);
    expect(navbar.find("#nav_button").length).toEqual(1);
  });
});
