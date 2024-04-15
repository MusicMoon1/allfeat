import React, { useState } from "react";
import filericon from "../../../assets/icons/filterIcon.svg"
import { theme } from "../../../utils/Theme";
import { Box, Grid, useMediaQuery } from "@mui/material";
import MarketSidebar from "../../../components/MarketPlace/MarketSidebar";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Dashboard/Sidebar";
import Card from "../../../components/Library/Card";
import image from "../../../assets/videoImage.png"
import music from "../../../assets/audio/englishsong.mp3"
import { Route, Routes } from "react-router-dom";
import NftsDetails from "./NftsDetails";
import MarketPlace from "./MarketPlace";
// import filericon from "../../../assets/icons/fillericon.svg"

export default function Index() {

  const isMobile = useMediaQuery("(max-width:600px)");
  const [sidebarOpen1, setSidebarOpen1] = useState(true);



  const toggleSidebar = () => {
    setSidebarOpen1(!sidebarOpen1);
  };

  const sideBarWidth = 256;
  return (
    <>
      <Box sx={{ background: theme.colors.black }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            // borderRadius: "40px",

          }}
        >
          <Box sx={{
            flexGrow: 1, background: theme.colors.background,
            //  borderRadius: "40px",
            overflowY: "auto",
            scrollbarWidth: "",
            '&::-webkit-scrollbar': {
              width: "0em",
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: theme.colors.background,
              borderRadius: "10px",
            },

          }}>
            <Navbar logotext="Market" />
            <Box sx={{ display: "flex", position: "relative" }}>
              <Sidebar boxNo={2} />
              <Grid container sx={{ display: "flex", flexDirection: "row" }}>
                {!isMobile &&
                  <Grid sx={{ width: "100%", display: "flex", flexDirection: "row", margin: isMobile ? "" : "1.5rem" }}>
                    <div style={{ width: sidebarOpen1 ? sideBarWidth + 25 : "auto", }} onClick={toggleSidebar}>
                      <img src={filericon} alt="filericon" />
                      <span style={{ margin: "0 20px", fontSize: "14px", fontWeight: 700, color: theme.colors.textcolor, fontFamily: theme.fonts.Light, }}>{sidebarOpen1 ? "Hide Filters" : ""}</span>
                    </div>
                    <div style={{ width: isMobile ? "100%" : `calc(100% - ${sideBarWidth}px - 3rem)`, display: "flex", alignItems: "center" }}>
                      <p style={{ fontSize: "14px", fontWeight: 400, color: theme.colors.white, fontFamily: theme.fonts.Light, margin: 0 }}>Audio NFTs</p>
                    </div>
                  </Grid>
                }
                {isMobile ?
                  <Grid item style={{ display: "flex", flexDirection: "column", width: sideBarWidth, margin: "1.5rem" }}>
                    <MarketSidebar />
                  </Grid>
                  :
                  <Grid item style={{ display: "flex", flexDirection: "column", width: sidebarOpen1 ? sideBarWidth : 0, overflow: "hidden", transition: "width 0.5s ease", margin: "0 1.5rem" }}>
                    {sidebarOpen1 ? <MarketSidebar /> : ""}
                  </Grid>
                }

                <Routes>
                  <Route path='/' element={<MarketPlace />} />
                  <Route path='/nftDetail' element={<NftsDetails />} />
                </Routes>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}