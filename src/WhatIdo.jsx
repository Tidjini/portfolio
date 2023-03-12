import React from "react";

function ShadowTitle({ title }) {
  return (
    <div className="shadow-title">
      <h1 className="shadow">{title}</h1>
      <h1 className="title">{title}</h1>
    </div>
  );
}

export default function WhatIdo() {
  return (
    <div>
      <ShadowTitle title="What I do" />
      <ShadowTitle title="Tools" />
      <ShadowTitle title="Recent Works" />
    </div>
  );
}
