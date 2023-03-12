import React from "react";

function ShadowTitle({ title }) {
  return (
    <div className="shadow-title">
      <h1 className="shadow">{title}</h1>
      <h1 className="title">{title}</h1>
    </div>
  );
}

function WidElement({ title, picture }) {
  <li></li>;
}

export default function WhatIdo() {
  return (
    <div>
      <ShadowTitle title="What I do" />
      <ul className="wid-container">
        <li className="wid-element">
          <img src="assets/what/requirements.png" className="wid-img" />
          <h3 className="wid-title">Define Needs & Requirements</h3>
        </li>
      </ul>
    </div>
  );
}
