import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
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

  it("should handle a disable event", () => {
    const IndexInstance = shallow(<Index />).instance();
    const enableDisableSpy = jest.spyOn(IndexInstance, "enableOrDisable");
    const disableSpy = jest.spyOn(IndexInstance, "disableThisAndLaterRooms");
    IndexInstance.updateRoom(1, { type: "checkbox", checked: false });

    expect(enableDisableSpy).toHaveBeenCalledTimes(1);
    expect(disableSpy).toHaveBeenCalledTimes(1);
  });

  it("should handle an enable event", () => {
    const IndexInstance = shallow(<Index />).instance();
    const enableSpy = jest.spyOn(IndexInstance, "enablePreviousRooms");

    IndexInstance.updateRoom(1, { type: "checkbox", checked: true });

    expect(enableSpy).toHaveBeenCalledTimes(1);
  });

  it("should handle an update to the number of guests", () => {
    const IndexInstance = shallow(<Index />).instance();
    const enableSpy = jest.spyOn(IndexInstance, "handleGuestAmounts");

    IndexInstance.updateRoom(1, { type: "select" });

    expect(enableSpy).toHaveBeenCalledTimes(1);
  });
});
