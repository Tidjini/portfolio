import React from "react";

function ShadowTitle({ title }) {
  return (
    <div className="shadow-title">
      <h1 className="shadow">{title}</h1>
      <h1 className="title">{title}</h1>
    </div>
  );
}

function WidElement({ title, image, active }) {
  return (
    <li className={active ? "wid-element active" : "wid-element"}>
      <img src={image} className="wid-img" />
      <h3 className="wid-title">{title}</h3>
    </li>
  );
}

export default function WhatIdo() {
  return (
    <div>
      <ShadowTitle title="What I do" />
      <ul className="wid-container">
        <WidElement
          image="assets/what/requirements.png"
          title="Define Needs & Requirements"
        />
        <WidElement
          image="assets/what/modeling.png"
          title="Modeling & Conception"
        />
        <WidElement
          image="assets/what/dev.png"
          title="Coding & Developing"
          active
        />
        <WidElement image="assets/what/test.png" title="Testing" />
        <WidElement image="assets/what/deploy.png" title="Deploy & Deliver" />
      </ul>
    </div>
  );
}
