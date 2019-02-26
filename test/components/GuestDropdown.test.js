import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GuestDropdown from "../../components/GuestDropdown";

Enzyme.configure({ adapter: new Adapter() });

const fakeProps = {
  dropdownOptions: [1, 2],
  guestValue: 2,
  isActive: true,
  id: "test-dropdown",
  labelText: "Adults",
  handleChange: jest.fn()
};

describe("GuestDropdown", () => {
  it("should render with disabled if isActive=== false", () => {
    const localFakeProps = { ...fakeProps, isActive: false };

    const shallowGuestDropdown = shallow(<GuestDropdown {...localFakeProps} />);

    expect(
      shallowGuestDropdown.find("div").hasClass("dropdown dropdown--disabled")
    ).toBe(true);
  });

  it("should call props.handleChange() on dropdown onChange()", () => {
    const shallowGuestDropdown = shallow(<GuestDropdown {...fakeProps} />);

    const dropdown = shallowGuestDropdown.find("select");
    dropdown.simulate("change");

    expect(fakeProps.handleChange).toHaveBeenCalledTimes(1);
  });
});
