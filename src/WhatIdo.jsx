import { Grid } from "@mui/material";
import React from "react";
import ShadowTitle from "./components/ShadowTitle.jsx";
import { useBreakPoints } from "./hooks/useWindowSize.js";

const props = {
  xs: 6,
  sm: 4,
  md: 3,
  lg: 2,
};
function WidElement({ title, image, active }) {
  return (
    <div
      className="wid-element"
      style={{
        backgroundColor: active ? "#15c498" : "transparent",
        borderColor: active ? "#15c498" : "#808184",
      }}
    >
      <img src={image} className="wid-img" />
      <h3 className="wid-title">{title}</h3>
    </div>
  );
}

const breakPoints = ["xs", "sm", "md"];
export default function WhatIdo() {
  const type = useBreakPoints();
  return (
    <div>
      <ShadowTitle title="What I do" />

      <Grid
        container
        spacing={2}
        style={{
          marginTop: -70,
          padding: 0,
        }}
        justifyContent={breakPoints.includes(type) ? "flex-start" : "center"}
      >
        <Grid item {...props}>
          <WidElement
            image="assets/what/requirements.png"
            title="Define Needs & Requirements"
          />
        </Grid>
        <Grid item {...props}>
          <WidElement
            image="assets/what/modeling.png"
            title="Modeling & Conception"
          />
        </Grid>
        <Grid item {...props}>
          <WidElement
            image="assets/what/dev.png"
            title="Coding & Developing"
            active
          />
        </Grid>
        <Grid item {...props}>
          <WidElement image="assets/what/test.png" title="Testing" />
        </Grid>
        <Grid item {...props}>
          <WidElement image="assets/what/deploy.png" title="Deploy & Deliver" />
        </Grid>
      </Grid>
    </div>
  );
}
