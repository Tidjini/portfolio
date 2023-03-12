import React from "react";
import ShadowTitle from "./components/ShadowTitle";

function ToolsElement({ title, img }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 16,
        textAlign: "center",
        width: 150,
      }}
    >
      <img src={img} style={{ width: 72, height: 72, objectFit: "contain" }} />
      <h3 className="wid-title">{title}</h3>
    </div>
  );
}
export default function Tools() {
  return (
    <div>
      <ShadowTitle title="Coding" />

      <div
        className="tools-container"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          marginTop: -50,
        }}
      >
        <div className="currently-using" style={{}}>
          <h3 className="title">Currently using</h3>
          <section style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <ToolsElement title="Python" img="assets/languages/python.png" />
            <ToolsElement title="Javascript" img="assets/languages/js.png" />
          </section>
          <section style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <ToolsElement title="Django" img="assets/frameworks/django.png" />
            <ToolsElement title="React JS" img="assets/frameworks/react.png" />
          </section>
          <section style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <ToolsElement title="VS Code" img="assets/tools/vscode.png" />
            <ToolsElement title="dbForge" img="assets/tools/dbforge.png" />
            <ToolsElement title="Figma" img="assets/tools/figma.png" />
          </section>
        </div>
        <div className="worked-with" style={{}}>
          <h3 className="title">Worked with</h3>
          <section style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <ToolsElement title="C-Sharp" img="assets/languages/csharp.png" />
            <ToolsElement title="Java" img="assets/languages/java.png" />
            <ToolsElement title="Kotlin" img="assets/languages/kotlin.png" />
          </section>
          <section style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <ToolsElement
              title="Android SDK"
              img="assets/frameworks/android.png"
            />
            <ToolsElement
              title=".Net Framework"
              img="assets/frameworks/dotnet.png"
            />
          </section>
          <section style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <ToolsElement
              title="Sql Server"
              img="assets/tools/sql-server.png"
            />
            <ToolsElement
              title="Android Studio"
              img="assets/tools/android-studio.png"
            />
            <ToolsElement
              title="Rider"
              img="assets/tools/jetbrains-rider.png"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
