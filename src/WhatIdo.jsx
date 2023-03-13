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
function WidElement({ title, subtitle, image, active, description }) {
  const [display, setDisplay] = React.useState(false);
  const onMouseEnter = React.useCallback((event) => {
    // setTimeout(() => {
    //   setDisplay(true);
    // }, 300);
  }, []);
  const onMouseLeave = React.useCallback((event) => {
    // setDisplay(false);
  }, []);

  return (
    <>
      <div
        className="wid-element"
        style={{
          backgroundColor: active ? "#15c498" : "transparent",
          borderColor: active ? "#15c498" : "#808184",
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          style={{
            display: display ? "none" : "block",
          }}
        >
          <img src={image} className="wid-img" />
          <h3 className="wid-title">{title}</h3>
          <p style={{ marginTop: -15, fontSize: 12 }}>{subtitle}</p>
        </div>
        <div
          style={{
            display: display ? "block" : "none",
            zIndex: 2,
          }}
        >
          <p style={{ color: "#0d2d45" }}>{description}</p>
        </div>
      </div>
      {/* <div
        className="wid-element"
        style={{
          borderColor: active ? "#15c498" : "#808184",
          display: display ? "block" : "none",
        }}
      >
        <h3 style={{ zIndex: 2 }}>{title}</h3>
      </div> */}
    </>
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
        style={{
          margin: "-70px auto 0 auto",
        }}
        justifyContent={breakPoints.includes(type) ? "flex-start" : "center"}
        spacing={1}
      >
        <Grid item {...props}>
          <WidElement
            image="assets/what/requirements.png"
            title="Requirements"
            subtitle="gathering"
          />
        </Grid>
        <Grid item {...props}>
          <WidElement
            image="assets/what/modeling.png"
            title="Desing"
            subtitle="(Conception)"
          />
        </Grid>
        <Grid item {...props}>
          <WidElement image="assets/what/dev.png" title="Coding" active />
        </Grid>
        <Grid item {...props}>
          <WidElement
            image="assets/what/test.png"
            title="Testing"
            subtitle="(TDD Approach)"
          />
        </Grid>
        <Grid item {...props}>
          <WidElement
            image="assets/what/deploy.png"
            title="Deploy"
            subtitle="(deliver)"
          />
        </Grid>
      </Grid>
    </div>
  );
}
