import React from "react";
import ReactDOM from "react-dom/client";
import ReactTestUtils, { act } from "react-dom/test-utils";

import Navbar from "../src/Navbar";

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

  //   it("renders multiple appointments in an ol element", () => {
  //     render(<AppointmentsDayView appointments={appointments} />);
  //     expect(container.querySelector("ol")).not.toBeNull();
  //     expect(container.querySelector("ol").children).toHaveLength(2);
  //   });
});
