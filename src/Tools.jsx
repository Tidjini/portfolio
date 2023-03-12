import React from "react";
import ShadowTitle from "./components/ShadowTitle";

export default function Tools() {
  return (
    <div>
      <ShadowTitle title="tools" />
      <div className="tools-container">
        <div className="currently-using"></div>
        <div className="worked-with"></div>
      </div>
    </div>
  );
}
