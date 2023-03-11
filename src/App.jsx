import React from "react";
import Navbar from "./Navbar.jsx";
import Main from "./Main.jsx";
import ScrollIndicator from "./ScrollIndicator.jsx";
import Skills from "./Skills.jsx";

export default function App() {
  return (
    <div>
      <div class="box">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
      </div>
      <Navbar />
      <Main />
      <ScrollIndicator />
      <Skills />
    </div>
  );
}
