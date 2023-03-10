import React from "react";

export default function Navbar() {
  return (
    <header className="flex-center">
      <div className="header-section">
        <img id="logo" src="assets/tidjini.messaoudi.me.png" />
      </div>
      <nav className="header-section">
        <ul className="flex-center">
          <li className="nav-item active">
            <a href="#about">
              <span className="green">01.</span> About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects">
              <span className="green">02.</span> Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#cv">
              <span className="green">03.</span> Cv
            </a>
          </li>
          <li className="nav-item">
            <a href="#contacts">
              <span className="green">04.</span> Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
