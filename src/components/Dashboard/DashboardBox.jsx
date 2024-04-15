import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../utils/Theme";
import { Link } from "react-router-dom";

const DashboardBox = ({ link, background, boxWidth, color, boxHight, upperBoxHight, lowerBoxHight, icon, iconWidth, iconHight, imageWidth, imageHight, title, image }) => {
    return (
        <Link to={link} style={{ textDecoration: "none" }}>
            <Box sx={{ width: boxWidth || "303px", height: boxHight || "238px", background, borderRadius: "15px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                <Box sx={{ width: "100%", height: "80px", display: "flex", alignItems: "center", pr: 3, justifyContent: "end" }}>
                    <img src={icon} alt="icon" width={iconWidth || 24} height={iconHight || 24} />
                </Box>
                <Box sx={{ width: "100%", px: 2, height: upperBoxHight || "150px", display: "flex", alignItems: "center", marginBottom: "4%" }}>
                    <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "end" }}>
                        <Typography variant='h6' sx={{ color, fontSize: "1.2rem", fontFamily: theme.fonts.Light, fontWeight: 500 }}>
                            {title}
                        </Typography>
                    </Box>
                    <div className="container" sx={{ width: "100%", height: lowerBoxHight || "125px", display: "flex", alignItems: "center", justifyContent: "end" }}>
                        <img className="image" src={image} alt="image" width={imageWidth || 123} height={imageHight || 121} />
                    </div>
                </Box>
            </Box>
        </Link>
    );
};

export default DashboardBox;
