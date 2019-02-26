import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Index from "../pages";

Enzyme.configure({ adapter: new Adapter() });

describe("IndexPage", () => {
  it("should render the full app", () => {
    global.localStorage.rooms = "";
    const mountedIndex = mount(<Index />);

    expect(mountedIndex.find("div").length).toEqual(14);
    expect(mountedIndex.find("button").length).toEqual(1);
    expect(mountedIndex.find("Room").length).toEqual(4);
    expect(mountedIndex.find("GuestDropdown").length).toEqual(8);
  });
});
