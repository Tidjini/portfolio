import React from "react";
import ScrollIndicator from "./ScrollIndicator";

export default function Main() {
  return (
    <section className="main">
      <h1>Hello,</h1>
      <h1>
        I am <span className="green">Tidjini</span>,
      </h1>
      <h1>Fullstack Developer</h1>
      <p className="description tagline">
        Currently locatated in Algeria, I love building{" "}
        <span className="green">interactive</span>, digital experiences on web,
        mobile, and desktop.
      </p>
      <button>let's get in touch!</button>
      <ScrollIndicator />
    </section>
  );
}
