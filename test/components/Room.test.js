import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Room", () => {
  it("should be a room", () => {
    const mountedRoom = Enzyme.mount(<Room />);
  });
});
