import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import Main from "./Main.jsx";
import Skills from "./Skills.jsx";
import WhatIdo from "./WhatIdo.jsx";
import Tools from "./Tools.jsx";
import CurrentSkills from "./CurrentSkills.jsx";

export default function App() {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    const changeMode = setInterval(() => {
      // setMode((prev) => (prev === "light" ? "dark" : "light"));
    }, 5 * 2500);
    return () => clearInterval(changeMode);
  }, []);
  return (
    <div>
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      <Navbar mode={mode} />
      <Main />
      <Skills />
      <WhatIdo />
      <CurrentSkills />
    </div>
  );
}
