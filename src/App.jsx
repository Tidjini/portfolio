import React from "react";
import Navbar from "./Navbar.jsx";
import Main from "./Main.jsx";
import Skills from "./Skills.jsx";
import WhatIdo from "./WhatIdo.jsx";
import Tools from "./Tools.jsx";

export default function App() {
  return (
    <div>
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      <Navbar />
      <Main />
      <Skills />
      <WhatIdo />
      <Tools />
    </div>
  );
}
