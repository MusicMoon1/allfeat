import React, { useEffect } from "react";
import { theme } from "../../utils/Theme";
import { Divider, Typography, useMediaQuery } from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import profileImage from "../../assets/profile.png";
import filledimage from "../../assets/icons/Filled.png";
import BackgroundButton from "../Login/BackgroundButton";

import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Link } from "react-router-dom";

function ProfileBox() {
  const isMobile = useMediaQuery("(max-width:600px)");


  return (
    <div style={{ margin: "10%", display: "flex", justifyContent: "center" }}>
      <div>
        <div
          style={{
            width: isMobile ? "311px" : "256px",
            height: isMobile ? "617px" : "537px",
            position: "relative",
            padding: "3% 2.2%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            background: theme.colors.darkgrey,
            borderRadius: "16px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              position: "absolute",
              top: 10,
              right: 10,
              border: `3px solid ${theme.colors.textcolor}`,
            }}
          >
            <Link to="/dashboard/profile/edit">
              <BorderColorOutlinedIcon
                sx={{
                  width: "16px",
                  height: "16px",
                  color: theme.colors.textcolor,
                }}
              />
            </Link>
          </div>

          <div
            style={{
              width: isMobile ? "247px" : "100%",
              height: isMobile ? "352px" : "272px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={profileImage}
              alt=""
              width={160}
              height={160}
              style={{ borderRadius: "50%" }}
            />
            <div
              style={{
                width: "100%",
                height: "88px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: theme.colors.white,
                  fontFamily: theme.fonts.Light,
                  textTransform: "capitalize",
                }}
              >
              Zaman Ali
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "16px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: theme.colors.white,
                    fontFamily: theme.fonts.Light,
                  }}
                >

                  0akxc....macscjcvk
                </Typography>
                <img src={filledimage} alt="Filled" width={16} height={16} />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                margin: "15px 0",
                display: isMobile ? "block" : "none",
              }}
            >
              <div style={{ width: "186px", height: "60px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: theme.colors.white,
                    textAlign: "center",
                    fontFamily: theme.fonts.Light,
                  }}
                >
                  {"www.app.title"}
                </Typography>
              </div>
            </div>


            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "124px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "16px",
                }}
              >
                <LanguageOutlinedIcon
                  sx={{
                    color: theme.colors.textcolor,
                    width: "16px",
                    height: "16px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: theme.colors.white,
                    fontFamily: theme.fonts.Light,
                  }}
                >
                  {"www.abc.com"}
                </Typography>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "199px",
              height: "65px",
              display: "flex",
              marginBottom: '5%',
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "108px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a href="#">
                  <TwitterIcon
                    sx={{
                      width: "20px",
                      height: "20px",
                      color: theme.colors.textcolor,
                    }}
                  />
                </a>
                <a href="https://instagram.com">
                  <InstagramIcon
                    sx={{
                      width: "20px",
                      height: "20px",
                      color: theme.colors.textcolor,
                    }}
                  />
                </a>
                <a href="#">
                  <FacebookOutlinedIcon
                    sx={{
                      width: "20px",
                      height: "20px",
                      color: theme.colors.textcolor,
                    }}
                  />
                </a>
                <DownloadForOfflineIcon
                  
                  sx={{
                    width: "20px",
                    height: "20px",
                    color: theme.colors.textcolor,
                  }}
                />

              </div>
            </div>
            <div>
              <Divider sx={{ background: theme.colors.textcolor }} />
            </div>

            <div style={{ width: "100%", textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: theme.colors.textcolor,
                  fontFamily: theme.fonts.Light,
                }}
              >
                Member since Mar 15, 2023
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
