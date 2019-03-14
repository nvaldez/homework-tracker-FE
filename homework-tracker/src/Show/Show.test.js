import React from "react";
import { shallow } from "enzyme";
import Show from "./Show";

describe("Testing Show component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Show />);
  });
  it('should have a header that says "Homework"', () => {
    expect(component.contains(<h1>Homework</h1>)).toBe(true);
  });
});
