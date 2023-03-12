import React from "react";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="flex-center">
      <div className="header-section">
        <a href="#" id="logo">
          <span className="green">ti</span>djini.messaou
          <span className="green">di</span>.com
        </a>
      </div>

      <Hidden mdDown>
        <nav className="header-section">
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
        </nav>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          id="menu-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon style={{ color: "white" }}></MenuIcon>
        </IconButton>
        <Menu
          id="men"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "menu-button",
          }}
          PaperProps={{
            style: {
              backgroundColor: "#141419",
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <a href="#about" className="nav-item">
              <span className="green">01.</span> About
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#projects" className="nav-item">
              <span className="green">02.</span> Projects
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#contacts" className="nav-item">
              <span className="green">03.</span> Contacts
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#cv" className="download">
              download CV{" "}
              <span className="open-box">
                <span className="arrow"></span>
              </span>
            </a>
          </MenuItem>
        </Menu>
      </Hidden>
    </header>
  );
}
