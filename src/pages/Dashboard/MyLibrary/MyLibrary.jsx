import React from 'react'
import { Box, Grid, useMediaQuery } from '@mui/material';
import Card from '../../../components/Library/Card';
// import image from '../../../assets/musicCard.svg';
// import cardicon from '../../../assets/cardicon.svg';
// import playbtn from '../../../assets/play.svg';
// import artist from '../../../assets/artist.svg';
// import owner from '../../../assets/owner.svg';
// import cardMusic from '../../../assets/audio/englishsong.mp3';
import Sidebar from '../../../components/Dashboard/Sidebar';
import Navbar from '../../../components/Navbar';
import { theme } from '../../../utils/Theme';
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


export default function MyLibrary() {
  const isMobile = useMediaQuery("(max-width:600px)");

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
            <Navbar logotext="Library" />
            <Box sx={{ display: "flex", position: "relative" }}>
              <Sidebar boxNo={1} />
              <Grid container spacing={isMobile ? 0 : 2} sx={{ padding: isMobile ? "0" : "0 15px", display: "flex", justifyContent: isMobile ? "center" : "" }}>
                {getNFTs.map((item, index) => (
                  <Grid key={index} item sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
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
                      itemName={item.itemName} itemPrice={item.price}
                      artistName={item.createdBy.name} ownerName={item.createdBy.name}
                      itemIcon={item.coverPhoto.url && item.coverPhoto.url}
                      artistProfile={item.createdBy.profileImage.url} ownerProfile={item.createdBy.profileImage.url}
                      cardData={{ image: item.coverPhoto.url, music: item.audio.url }}
                    />

                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box >
    </>
  )
}
