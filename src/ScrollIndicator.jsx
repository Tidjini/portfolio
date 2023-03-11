import React from "react";

export default function ScrollIndicator() {
  return (
    <div className="scroll-indicator">
      <a
        href="#skills-tools"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="arrow-container">
          <span className="arrow-down-mini"></span>
          <span className="arrow-down-mini"></span>
          <span className="arrow-down"></span>
        </div>
      </a>
    </div>
  );
}
