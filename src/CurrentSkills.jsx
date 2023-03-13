import { Grid } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import ShadowTitle from "./components/ShadowTitle";
import { useBreakPoints } from "./hooks/useWindowSize";

function Skill({ img, name, percent, color, active }) {
  return (
    <div className="skill-item">
      <img
        alt="tech-icon"
        src={img}
        className="skill-item-img"
        style={{
          filter: active ? "none" : "grayscale(100%)",
        }}
      />
      <h1 className="skill-item-name">{name}</h1>

      <div
        className="percent-container"
        style={{
          border: `3px solid ${color}`,
          backgroundColor: `${color}60`,
        }}
      >
        <h1 style={{ fontSize: 16, fontWeight: "500", color }}>
          {percent + "%"}
        </h1>
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
      <ShadowTitle title="Skills" />
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
            active
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/languages/js.png"
            name="Javascript"
            percent={75}
            color="#fca311"
            active
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/frameworks/django.png"
            name="Django"
            percent={85}
            color="#94d2bd"
            active
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/frameworks/react.png"
            name="React JS"
            percent={80}
            color="#a1fcdf"
            active
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/tools/vscode.png"
            name="VS Code"
            percent={90}
            color="#b1e9ff"
            active
          />
        </Grid>

        <Grid item {...props}>
          <Skill
            img="assets/tools/figma.png"
            name="Figma"
            percent={30}
            color="#f47a36"
            active
          />
        </Grid>
      </Grid>
      <ShadowTitle title="Worked with" />
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
            img="assets/languages/csharp.png"
            name="Csharp"
            percent={60}
            color="#94d2bd"
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/languages/java.png"
            name="Java"
            percent={40}
            color="#fca311"
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/languages/kotlin.png"
            name="Kotlin"
            percent={20}
            color="#e63946"
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/frameworks/dotnet.png"
            name=".Net Framework"
            percent={50}
            color="#a1fcdf"
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/frameworks/android.png"
            name="Android SDK"
            percent={70}
            color="#ffb703"
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/tools/android-studio.png"
            name="Android Studio"
            percent={70}
            color="#b1e9ff"
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/tools/dbforge.png"
            name="dbForge"
            percent={20}
            color="#ffab00"
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/tools/jetbrains-rider.png"
            name="Rider"
            percent={40}
            color="#f47a36"
          />
        </Grid>
        <Grid item {...props}>
          <Skill
            img="assets/tools/sql-server.png"
            name="Sql Server"
            percent={20}
            color="#ffab00"
          />
        </Grid>
      </Grid>
    </div>
  );
}
