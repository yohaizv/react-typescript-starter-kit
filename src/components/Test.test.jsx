import React from "react";
import Test from "./Test";
import TestRenderer from 'react-test-renderer';

describe("Test: ", () => {
  it("render correctly", () => {
    const component = TestRenderer.create(<Test>123</Test>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
