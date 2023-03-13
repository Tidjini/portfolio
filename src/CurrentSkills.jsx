import { Grid } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import ShadowTitle from "./components/ShadowTitle";
import { useBreakPoints } from "./hooks/useWindowSize";

function Skill({ img, name, percent, color }) {
  return (
    <div
      style={{
        position: "relative",
        height: 156,
        width: 156,
        textAlign: "center",
      }}
    >
      <img
        alt="tech-icon"
        src={img}
        style={{
          width: 96,
          height: 96,
          objectFit: "contain",
        }}
      />
      <h1
        style={{
          fontSize: 18,
          color: "#FFF",
          fontWeight: "400",
          textTransform: "uppercase",
        }}
      >
        {name}
      </h1>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        <div
          style={{
            border: `4px solid ${color}`,
            backgroundColor: `${color}40`,
            width: 64,
            height: 64,
            borderRadius: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 0 50px 0",
          }}
        >
          <h1 style={{ fontSize: 18, fontWeight: "500", color }}>
            {percent + "%"}
          </h1>
        </div>
      </div>
    </div>
  );
}
const breakPoints = ["xs", "sm", "md"];
const props = {
  xs: 6,
  sm: 4,
  md: 3,
  lg: 2,
};
export default function CurrentSkills() {
  const type = useBreakPoints();
  return (
    <div>
      <ShadowTitle title="Skils" />
      <Grid
        container
        style={{
          marginTop: "-70px",
          alignSelf: "center",
        }}
        justifyContent={breakPoints.includes(type) ? "flex-start" : "center"}
        spacing={1}
      >
        <Grid item {...props}>
          <Skill
            img="assets/languages/python.png"
            name="Python"
            percent={80}
            color="#e63946"
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/languages/js.png"
            name="Javascript"
            percent={75}
            color="#fca311"
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/frameworks/django.png"
            name="Django"
            percent={75}
            color="#94d2bd"
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/frameworks/react.png"
            name="React JS"
            percent={80}
            color="#2191fb"
          />
        </Grid>
      </Grid>
    </div>
  );
}
