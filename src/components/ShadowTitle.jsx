import React from "react";

export default function ShadowTitle({ title }) {
  return (
    <div className="shadow-title">
      <h1 className="shadow">{title}</h1>
      <h1 className="title">{title}</h1>
    </div>
  );
}
