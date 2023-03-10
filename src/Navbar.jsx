import React from "react";

export default function Navbar() {
  return (
    <header className="flex-center">
      <div className="header-section">
        <a href="#">
          <img
            id="logo"
            src="assets/tidjini.messaoudi.me.png"
            alt="Tidjini Messaoudi"
          />
        </a>
      </div>
      <nav className="header-section">
        <ul className="flex-center">
          <li>
            <a href="#about" className="nav-item active">
              <span className="green">01.</span> About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-item">
              <span className="green">02.</span> Projects
            </a>
          </li>
          <li>
            <a href="#cv" className="nav-item">
              <span className="green">03.</span> Cv
            </a>
          </li>
          <li>
            <a href="#contacts" className="nav-item">
              <span className="green">04.</span> Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
