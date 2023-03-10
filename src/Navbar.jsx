import React from "react";

export default function Navbar() {
  return (
    <header className="flex-center">
      <div className="header-section">
        <img id="logo" src="assets/tidjini.messaoudi.me.png" />
      </div>
      <nav className="header-section">
        <ul className="flex-center">
          <li>01. About</li>
          <li>02. Projects</li>
          <li>03. Cv</li>
          <li>04. Contacts</li>
        </ul>
      </nav>
    </header>
  );
}
