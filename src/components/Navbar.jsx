import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import BurgerIcon from "../assets/icons/burgerIcon.png";
import logoIcon from "../assets/icons/logoicon.png";
import logo from "../assets/logo.png";
import mens from "../assets/mens.png";
import { theme } from "../utils/Theme";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar(props) {
  const drawerWidth = 240;
  const { window } = props;
  const location = useLocation()
  const navItems = ["Home", "About", "Contact"];

  const isMobile = useMediaQuery("(max-width:600px)");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (location.pathname === '/dashboard/profile') {
      setIsProfile(true);
    } else {
      setIsProfile(false);
    }
  }, [location]);

  const handleLogut = () => {
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} alt="logo" />
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box style={{ display: "flex", width: "100%", height: "90px" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: theme.colors.navColor,
          padding: "1rem 0.5rem 0rem",
          height: "90px",
          position: "relative",
          // borderTopLeftRadius: "40px",
          // borderTopRightRadius: "40px",
          zIndex: 1
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginRight: "200px" }}>
            {
              props.logotext ? (

                <Typography variant="h6" sx={{ width: "200px", textAlign: "end", display: isMobile ? "none" : "block", marginLeft: "2%", fontSize: "1.5rem", fontFamily: theme.fonts.Light, fontWeight: 500 }}>
                  {props.logotext}
                </Typography>
              ) : (
                isMobile ? (
                  <Link to="/">
                    <img src={logoIcon} alt="logo" />
                  </Link>
                ) : (
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                )
              )
            }
          </Box>


          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              borderLeft: `2px solid ${theme.colors.borderColor}`,
            }}
          >
            <Link to="/dashboard/marketplace">
              <Button
                sx={{
                  marginLeft: "2rem",
                  fontSize: "1rem",
                  fontWeight: 500,
                  fontFamily: theme.fonts.Light,
                  color: theme.colors.textcolor,
                }}
              >
                Market Place
              </Button>
            </Link>
            <Link to="/dashboard/dao">
              <Button
                sx={{
                  marginLeft: "1rem",
                  fontSize: "1rem",
                  fontWeight: 500,
                  fontFamily: theme.fonts.Light,
                  color: theme.colors.textcolor,
                }}
              >
                Dao
              </Button>
            </Link>
          </Box>

          <Box sx={{}}>
            {
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: isMobile ? "11rem" : "35rem",
                  justifyContent: isMobile ? "flex-end" : "space-between",
                }}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Search"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon sx={{ color: theme.colors.textcolor }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ sx: { color: theme.colors.textcolor } }}
                  sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.colors.borderColor,
                    },
                    "& .MuiInputBase-input": {
                      color: theme.colors.textcolor,
                    },
                  }}
                />
                {/* <Box
                sx={{
                  width: "2.1rem",
                  height: "2.1rem",
                  borderRadius: "50%",
                  display: "flex",
                  marginRight: isMobile ? "2.5rem" : "",
                  justifyContent: "center",
                  alignItems: "center",
                  background: theme.colors.yellow,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "13px",
                    color: theme.colors.black,
                    fontFamily: theme.fonts.Light,
                    fontWeight: 700,
                  }}
                >
                  23
                </Typography>
              </Box> */}
                {


                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        width: "5rem",
                        height: "2.1rem",
                        borderRadius: "20px",
                        justifyContent: "center",
                        alignItems: "center",
                        background: theme.colors.yellow,
                        marginRight: "0.6rem",
                        display: { xs: "none", sm: "flex" },
                      }}
                    >
                      <Link to="/dashboard/createNFT">
                        <Button
                          sx={{
                            fontSize: "14px",
                            color: theme.colors.black,
                            fontFamily: theme.fonts.Light,
                            fontWeight: 700,
                          }}
                        >
                          Upload
                        </Button>
                      </Link>
                    </Box>
                    {
                      !isProfile ?

                        <Box
                          sx={{
                            width: isMobile ? "100%" : "8rem",
                            height: "2.19rem",
                            borderRadius: "20px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",

                            // border: `2px solid ${theme.colors.borderColor}`,
                          }}
                        >
                          <Link to="/dashboard/profile" style={{ width: "32px", height: "32px" }}>
                            <img
                              src={mens}
                              alt="Default Profile"
                              width={32}
                              height={32}
                              style={{ borderRadius: "50%" }}
                            />
                          </Link>
                          {/* <Button
                              sx={{
                                fontSize: "14px",
                                color: theme.colors.white,
                                fontFamily: theme.fonts.Light,
                                fontWeight: 700,
                                margin: "0 0.5rem",
                                display: { xs: "none", sm: "block" },
                              }}
                            >
                              Ξ17.00698
                            </Button> */}
                        </Box> :
                        <Button
                          onClick={handleLogut}
                          sx={{
                            fontSize: "14px",
                            height: "34px",
                            background: theme.colors.yellow,
                            borderRadius: "20px",
                            color: theme.colors.black,
                            fontFamily: theme.fonts.Light,
                            fontWeight: 700,
                            '&:hover': {
                              background: theme.colors.black, // Change background color on hover
                              color: theme.colors.yellow,     // Change text color on hover
                            }
                          }}
                        >
                          Logout
                        </Button>
                    }
                  </Box>
                }
              </Box>
            }
          </Box>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <img src={BurgerIcon} alt="BurgerIcon" width={32} height={32} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>


    </Box>
  );
}
