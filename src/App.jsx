import React from "react";
import Navbar from "./Navbar.jsx";
import Main from "./Main.jsx";
import Skills from "./Skills.jsx";
import WhatIdo from "./WhatIdo.jsx";
import Tools from "./Tools.jsx";

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
      <Skills />
      <WhatIdo />
      <Tools />
    </div>
  );
}
