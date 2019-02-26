import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Room from "../../components/Room";

Enzyme.configure({ adapter: new Adapter() });

describe("Room", () => {
  it("should be a room", () => {
    const mountedRoom = mount(<Room />);
  });
});
