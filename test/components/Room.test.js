import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Room from "../../components/Room";

Enzyme.configure({ adapter: new Adapter() });

const fakeProps = {
  adults: 2,
  children: 2,
  showCheckbox: true,
  roomNumber: 1,
  isActive: true,
  updateRoom: jest.fn()
};

describe("Room", () => {
  it("should render the checkbox when showCheckbox === true", () => {
    const mountedRoom = mount(<Room {...fakeProps} />);

    expect(mountedRoom.find("input").length).toEqual(1);
  });

  it("should NOT render checkbox when showCheckbox === false", () => {
    const localFakeProps = { ...fakeProps, showCheckbox: false };

    const mountedRoom = mount(<Room {...localFakeProps} />);

    expect(mountedRoom.find("input").length).toEqual(0);
  });

  it("should be disabled when isActive === false", () => {
    const localFakeProps = { ...fakeProps, isActive: false };

    const mountedRoom = mount(<Room {...localFakeProps} />);

    expect(mountedRoom.find("section").hasClass("room room--disabled")).toBe(
      true
    );
    expect(
      mountedRoom.find("h4").hasClass("room__header room__header--disabled")
    ).toBe(true);
  });

  it("should call handleChange when the checkbox is checked", () => {
    const mountedRoom = mount(<Room {...fakeProps} />);

    const checkbox = mountedRoom.find("input");
    checkbox.simulate("change");

    expect(fakeProps.updateRoom).toHaveBeenCalledTimes(1);
  });
});
