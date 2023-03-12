import Grid from "@mui/material/Grid";
import React from "react";

export default function Navbar() {
  return (
    <header>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <a href="#" id="logo">
            <span className="green">ti</span>djini.messaou
            <span className="green">di</span>.com
          </a>
        </Grid>
        <Grid container item xs={6}>
          <ul className="flex-center">
            <li>
              <a href="#about" className="nav-item active">
                <span className="green">01.</span> About
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-item">
                <span className="green">02.</span> Projects
              </a>
            </li>

            <li>
              <a href="#contacts" className="nav-item">
                <span className="green">03.</span> Contacts
              </a>
            </li>
            <li>
              <a href="#cv" className="download">
                download CV{" "}
                <span className="open-box">
                  <span className="arrow"></span>
                </span>
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </header>
  );
}
