import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Index from "../src/client/pages";

Enzyme.configure({ adapter: new Adapter() });

describe("IndexPage", () => {
  it("should render the full app", () => {
    const mountedApp = mount(<Index />);
  });
});
