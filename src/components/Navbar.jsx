// Navbar.js
import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./navbar.css"
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = ["Home", "About", "Events","Theme", "Pronites", "Sponsors", "Our Team" , "Campus Embassador" , "Registration"];

  const drawerList = (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar className={styles.navbar} position="fixed"  sx={{ backgroundColor: "#001f3f", padding: "0 20px" }}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: "#03a9f4",
            fontSize: { xs: "18px", sm: "24px", md: "28px" },
          }}
        >
          Blitzschlag 2025
        </Typography>
        
        {/* Mobile Hamburger Menu */}
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerList}
            </Drawer>
          </>
        ) : (
          /* Desktop Menu */
          <Box sx={{ display: "flex", gap: "20px" }}>
            <ul className={styles.navMenu}>
              <li>
              <Button
                sx={{
                  color: "#FBFBFB",
                  fontSize: { sm: "16px", md: "18px" },
                  textTransform: "none",
                }}
              >
                <Link color="#FBFBFB" to="/">
                  Home
                </Link>
              </Button>
              </li>
              <li>
              <Button
                sx={{
                  color: "#e0f7fa",
                  fontSize: { sm: "16px", md: "18px" },
                  textTransform: "none",
                }}
              >
                <Link className="nav-link active" aria-current="page" to="/about">
                  AboutUs
                </Link>
              </Button>
              <li>
              </li>
              <Button
                sx={{
                  color: "#e0f7fa",
                  fontSize: { sm: "16px", md: "18px" },
                  textTransform: "none",
                }}
              >
                <Link className="nav-link active" aria-current="page" to="/about">
                  Themes
                </Link>
              </Button>
              </li>
              <li>
              <Button
                sx={{
                  color: "#e0f7fa",
                  fontSize: { sm: "16px", md: "18px" },
                  textTransform: "none",
                }}
              >
                <Link to="/events">
                  Events
                </Link>
              </Button>
              </li>
              <li>
              <Button
                sx={{
                  color: "#e0f7fa",
                  fontSize: { sm: "16px", md: "18px" },
                  textTransform: "none",
                }}
              >
                <Link className="nav-link active" aria-current="page" to="/events">
                  Pronites
                </Link>
              </Button>
              </li>
              <li>
              <Button
                sx={{
                  color: "#e0f7fa",
                  fontSize: { sm: "16px", md: "18px" },
                  textTransform: "none",
                }}
              >
                <Link className="nav-link active" aria-current="page" to="/campembass">
                  Campus Embassador
                </Link>
              </Button>
              </li>
              <li>
              <Button
                sx={{
                  color: "#e0f7fa",
                  fontSize: { sm: "16px", md: "18px" },
                  textTransform: "none",
                }}
              >
                <Link className="nav-link active" aria-current="page" to="/sponsers">
                  Sponsers
                </Link>
              </Button>
              </li>
              <li>
              <Button
                sx={{
                  color: "#e0f7fa",
                  fontSize: { sm: "16px", md: "18px" },
                  textTransform: "none",
                }}
              >
                <Link className="nav-link active" aria-current="page" to="/our_team">
                  Our Team
                </Link>
              </Button>
              </li>
              <li>
              <Button
                sx={{
                  color: "#e0f7fa",
                  fontSize: { sm: "16px", md: "18px" },
                  textTransform: "none",
                }}
              >
                <Link className="nav-link active" aria-current="page" to="/registration">
                  Registration
                </Link>
              </Button>
              </li>
            </ul>
            
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
/*
Home 
About Us
Theme
events
pronites
sponsers
our team
campus embassador
Register(user id)


//Pages
1.) Registration page(backend)
2.) AboutUs Page 
3.) Event Page
4.) Sponser Page
5.) Campus Embassador
6.) Merchandise page(optional)

//Scroll over
Home 
aboutus 
theme


//framermotion and 3js , explore these libraries






<ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/newsapp">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="theme"
                >
                  Theme
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="newsapp/general"
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="newsapp/health"
                >
                  Pronites
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="newsapp/science"
                >
                  Sponsers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="newsapp/sports"
                >
                  Our Team
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="newsapp/technology"
                >
                  Campus Embassador
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="newsapp/technology"
                >
                  Registration
                </Link>
              </li>
            </ul>
            */
