import React, { useState } from "react";
import filericon from "../../../assets/icons/filterIcon.svg"
import { theme } from "../../../utils/Theme";
import { Grid, useMediaQuery } from "@mui/material";
import Card from "../../../components/Library/Card";
// import MarketSidebar from "../../../components/MarketPlace/MarketSidebar";
// import Navbar from "../../../components/Navbar";
// import Sidebar from "../../../components/Dashboard/Sidebar";
// import image from "../../../assets/videoImage.png"
// import music from "../../../assets/audio/englishsong.mp3"
// import { Link } from "react-router-dom";
// import filericon from "../../../assets/icons/fillericon.svg"
const getNFTs = [
  {
    itemName: "Artwork 1",
    price: "1 ETH",
    createdBy: {
      name: "Artist 1",
      profileImage: {
        url: "https://example.com/artist1.jpg"
      }
    },
    coverPhoto: {
      url: "https://example.com/artwork1.jpg"
    },
    audio: {
      url: "https://example.com/audio1.mp3"
    }
  },
  {
    itemName: "Artwork 2",
    price: "0.5 ETH",
    createdBy: {
      name: "Artist 2",
      profileImage: {
        url: "https://example.com/artist2.jpg"
      }
    },
    coverPhoto: {
      url: "https://example.com/artwork2.jpg"
    },
    audio: {
      url: "https://example.com/audio2.mp3"
    }
  },
  // Add more dummy data objects as needed
];
export default function MarketPlace() {

  const isMobile = useMediaQuery("(max-width:600px)");
  const [sidebarOpen1, setSidebarOpen1] = useState(true);


  const toggleSidebar = () => {
    setSidebarOpen1(!sidebarOpen1);
  };

  const sideBarWidth = 256;
  return (
    <>
      <Grid item sx={{ width: isMobile ? "300px" : `calc(100% - ${sideBarWidth}px - 3rem)` }}>
        {isMobile &&
          <p style={{ fontSize: "14px", fontWeight: 400, color: theme.colors.white, fontFamily: theme.fonts.Light, marginLeft: "10px" }}>Audio NFTs</p>
        }
        <Grid container spacing={isMobile ? 0 : 2} sx={{ width: "100%", display: "flex", justifyContent: isMobile ? "center" : "" }}>
          {getNFTs.map((item, index) => (
            <Grid key={index} item sx={{ margin: isMobile ? "10px 0" : "" }}>
              <Card
                width={isMobile ? "280px" : "300px"}
                height="489px"
                imagewidth={isMobile ? "280px" : "300px"}
                imageheight="308px"
                cardinfowidth={isMobile ? "280px" : "300px"}
                cardinfoheight="190px"
                musicInfoWidth="276px"
                musicInfoHeight="84px"
                musicInfoPart1Width="52px"
                musicInfoPart1height="46px"
                musicInfoPart1ImageWidth="46px"
                musicInfoPart1Imageheight="46px"
                musicInfoText1Part2="18px"
                musicInfoText2Part2="16px"
                musicInfoText3Part2="18px"
                artistinfopart1width="112px"
                artistinfopart2width="122px"
                artistinfopart1height="56px"
                artistimageWidth="26px"
                artistimageHeight="26px"
                link={`/dashboard/marketplace/nftDetail?id=${item.id}`}
                itemName={item.itemName} itemPrice={item.price}
                artistName={item.createdBy.name} ownerName={item.createdBy.name}
                itemIcon={item.coverPhoto.url && item.coverPhoto.url}
                artistProfile={item.createdBy.profileImage.url} ownerProfile={item.createdBy.profileImage.url}
                cardData={{ image: item.coverPhoto.url, music: item.audio.url }}
              />
            </Grid>
          ))}
        </Grid>

        <div>
        </div>
      </Grid>
      {/* </Grid>
            </Box>
          </Box>
        </Box>
      </Box> */}
    </>
  )
}
