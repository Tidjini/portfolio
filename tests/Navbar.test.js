import React from "react";
import ReactDOM from "react-dom/client";
import ReactTestUtils, { act } from "react-dom/test-utils";

import Navbar from "../src/Navbar.jsx";

describe("Navbar", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });
  const render = (component) =>
    act(() => ReactDOM.createRoot(container).render(component));

  it("renders logo as img (#logo)", () => {
    render(<Navbar />);
    expect(container.querySelector("header>img[id='logo']")).not.toBeNull();
  });

  it("renders multiple nav element in an ul", () => {
    render(<Navbar />);
    expect(container.querySelector("ul")).not.toBeNull();
    expect(container.querySelector("ul").children).toHaveLength(4);
  });
});
