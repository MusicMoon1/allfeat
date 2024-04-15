import { Box, Button, Grid, InputAdornment, TextField, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "../utils/Theme";
import Yellowlogo from '../assets/icons/Yellowlogo.png'
import rightarrow from '../assets/icons/rightarrow.svg'
import SearchIcon from "@mui/icons-material/Search";



export default function Footer() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Grid
      container
      sx={{
        minHeight: "24.8rem",
        background: theme.colors.navColor,
        borderTop: `1px solid ${theme.colors.borderColor}`,
        borderBottomRightRadius:"40px",
        borderBottomLeftRadius:"40px"
      }}
    >
      <Grid
        container

        sx={{
          margin: isMobile ? "" : "0 7rem",
          width: "100%",
          display:"flex",
          justifyContent:"space-between",
          minHeight: "24.8rem",
          borderTop: `2px solid ${theme.colors.borderColor}`,
          padding: isMobile ? "4rem 2rem 0" : "4rem 3rem 0"
        }}
      >
        <Grid item xs={12} md={4} sx={{ color: 'white', marginBottom: isMobile ? "8%" : "0" }}>
          <img src={Yellowlogo} alt="yellowIcon" />
          <Typography variant="h6"
            sx={{
              width: isMobile ? '12rem' : '16rem',
              fontSize: isMobile ? "1rem" : "1.5rem",
              fontFamily: theme.fonts.Light,
              marginTop: "0.5rem"
            }}>
            Mint Your Melody, Own Your Legacy.
          </Typography>
        </Grid>

        <Grid item xs={12} md={2.33} sx={{ color: 'white', borderTop: isMobile ? `2px solid ${theme.colors.borderColor}` : "", padding: isMobile ? "7% 0" : "0" }}>
          <Typography variant="h6"
            sx={{
              width: '16rem',
              fontSize: "1rem",
              fontFamily: theme.fonts.Light,
              marginTop: "0.5rem",
              fontWeight: 500
            }}>
            Loop NFT
          </Typography>
          <ul style={{ listStyle: "none", padding: "0", lineHeight: "2.5rem", fontFamily: theme.fonts.Light, fontSize: "14px", fontWeight: 700, color: theme.colors.textcolor, marginTop: "1.5rem" }}>
            <li>Discover</li>
            <li>Connect wallet</li>
            <li>Create loop</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={2.33} sx={{ color: 'white', borderTop: isMobile ? `2px solid ${theme.colors.borderColor}` : "", padding: isMobile ? "7% 0" : "0" }}>
          <Typography variant="h6"
            sx={{
              width: '16rem',
              fontSize: "1rem",
              fontWeight: 500,
              fontFamily: theme.fonts.Light,
              marginTop: "0.5rem",
            }}>
            Info
          </Typography>
          <ul style={{ listStyle: "none", padding: "0", lineHeight: "2.5rem", fontFamily: theme.fonts.Light, fontSize: "14px", fontWeight: 700, color: theme.colors.textcolor, marginTop: "1.5rem" }}>
            <li>Create Loop</li>
            <li>Marketplace</li>
            <li>Support</li>
          </ul>
        </Grid>

        <Grid item xs={12} md={3.33} sx={{
          width: isMobile ? "19rem" : "22rem",
          color: "white",
          borderTop: isMobile ? `2px solid ${theme.colors.borderColor}` : "", padding: isMobile ? "8% 0" : "0"
        }}>
          <Box sx={{display:"flex",justifyContent:"flex-end",flexDirection:"column",}}>

          <Typography variant="h6"
            sx={{
              width: isMobile ? "19rem" : "100%",
              fontSize: "1rem",
              fontWeight: 500,
              fontFamily: theme.fonts.Light,
            }}
          >
            Join Newsletter
          </Typography>
          <Typography variant="h6"
            sx={{
              width: isMobile ? "19rem" : "100%",
              fontSize: "0.87rem",
              fontWeight: 400,
              fontFamily: theme.fonts.Light,
              marginTop: "13.5%"
            }}
          >
            Subscribe our newsletter to get more free music loop goodies and resources
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Enter your email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img src={rightarrow} alt="" width={36} height={36} style={{ background: theme.colors.yellow, padding: "0.5rem", borderRadius: "50%" }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ sx: { color: theme.colors.textcolor } }}
            sx={{

              "& .MuiOutlinedInput-root": {
                borderRadius: "2rem",
                width: isMobile ? "19rem" : "100%",
                padding: "4px 6px",
                marginTop: "1.5rem"
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.colors.borderColor,
                borderWidth: "3px"
              },
              "& .MuiInputBase-input": {
                color: theme.colors.textcolor,
              },
            }}
          />
          </Box>

        </Grid>
        <Grid xs={12} sx={{ color: 'white', borderTop: `2px solid ${theme.colors.borderColor}`, height: '85px', display: "flex", alignItems: "center", justifyContent: isMobile ? "center" : "space-between", color: theme.colors.textcolor }}>
          <Typography variant="h6" sx={{ fontSize: isMobile ? "10px" : "12px", fontFamily: theme.fonts.Light }}>Copyright © 2024 Part of LiveLoop Platform. All rights reserved.</Typography>
          <Typography variant="h6" sx={{ fontSize: "12px", fontFamily: theme.fonts.Light, display: { xs: "none", sm: "block" }, }}>We use cookies for better service. <Button sx={{ color: theme.colors.yellow }}>Accept</Button> </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
