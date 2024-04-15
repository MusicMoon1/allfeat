import { Box, Button, CircularProgress, Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useRef, useState } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { theme } from '../../../utils/Theme'
import { Link } from 'react-router-dom'
import InputField from '../../../components/Login/InputField'
import AntSwitcher from '../../../components/CreateNFTs/AntSwitcher'

import leftArrow from '../../../assets/icons/leftArrow.png'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import backgroundImage from '../../../assets/videoImage.png'
import MusicCard from '../../../components/CreateNFTs/MusicCard'
import { toast } from 'react-toastify'


const initialState = { itemName: "", description: "", price: 0, size: "", style: "", instrument: "" }

export default function CreateNFT() {
    const isMobile = useMediaQuery("(max-width:600px)");

    const [state, setState] = useState(initialState);
    const [isLoding, setIsLoding] = useState(false);
    const [media, setMedia] = useState({ cover: null, audio: null, sound1: null, sound2: null, sound3: null, sound4: null });
    const [selectedMedia, setSelectedMedia] = useState({ cover: null, audio: null, sound1: null, sound2: null, sound3: null, sound4: null, });


    const fileInputRef = useRef({ cover: null, audio: null, sound1: null, sound2: null, sound3: null, sound4: null });

    const handleClick = (type) => {
        fileInputRef.current[type].click();
    };

    const handleImageChange = (type, event) => {
        const file = event.target.files[0];
        setMedia({ ...media, [type]: file });

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedMedia({ ...selectedMedia, [type]: imageUrl });
        }
    };
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {

    }
    const handleClear = () => {
        setState(initialState)
        setMedia({ cover: null, audio: null });
        setSelectedMedia({ cover: null, audio: null });
    }

    return (
        <div style={{ background: theme.colors.navColor }}>
            <Navbar />
            <Grid>
                <Grid container style={{ margin: "5% 0", display: "flex", justifyContent: "center", }}>
                    <Grid item sx={{ height: isMobile ? "1850px" : "1623px", display: "flex", justifyContent: "space-between", flexDirection: "column", }}>
                        <div style={{ width: isMobile ? "350px" : "525px", height: "112px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                            <Button sx={{ width: isMobile ? "190px" : "222px", height: "40px", display: "flex", justifyContent: "space-between", padding: "0 15px", border: `3px solid ${theme.colors.textcolor}`, borderRadius: "40px", }} >
                                <img src={leftArrow} alt="" />
                                <Typography variant='h6' sx={{ color: theme.colors.white, fontSize: isMobile ? "13px" : "14px", fontFamily: theme.fonts.Light }}>
                                    <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
                                        Switch to Multiple
                                    </Link>
                                </Typography>
                            </Button>
                            <Typography variant='h6' sx={{ height: "56px", display: "flex", alignItems: "center", fontSize: isMobile ? "1.8rem" : "2.9rem", fontFamily: theme.fonts.Light, fontWeight: 500, color: theme.colors.white }}>
                                Create single collectible
                            </Typography>
                        </div>
                        <div style={{ width: isMobile ? "350px" : "502px", height: "49px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                            <Typography variant='h6' sx={{ height: "24px", display: "flex", alignItems: "center", fontSize: "1rem", fontFamily: theme.fonts.Light, fontWeight: 500, color: theme.colors.white }}>
                                Upload Image Cover
                            </Typography>
                            <Typography variant='h6' sx={{ height: "20px", display: "flex", alignItems: "center", fontSize: "12px", fontFamily: theme.fonts.Light, fontWeight: 500, color: theme.colors.textcolor }}>
                                Drag or choose your file to upload
                            </Typography>
                        </div>
                        <div
                            style={{ width: isMobile ? "350px" : "525px", height: "118px", cursor: "pointer", background: theme.colors.darkgrey, borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}
                            onClick={() => handleClick("cover")}
                        >
                            <div style={{ width: "100%", height: "54px", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column" }}>
                                <div style={{ textAlign: "center" }}>
                                    <UploadFileIcon sx={{ width: "24px", height: "24px", color: theme.colors.textcolor }} />
                                </div>
                                <Typography variant='h6' sx={{ display: "flex", alignItems: "center", fontSize: "0.65rem", fontFamily: theme.fonts.Light, fontWeight: 400, color: theme.colors.textcolor }}>
                                    {
                                        media.cover ? media.cover.name : "JPG, MP4 Gif, PNG, SVG. Max 100Mb"
                                    }
                                </Typography>
                            </div>
                            <input
                                accept="image/*"
                                type="file"
                                style={{ visibility: "hidden", position: "absolute", top: "-9999px", }}
                                onChange={(e) => handleImageChange('cover', e)}
                                ref={(el) => fileInputRef.current['cover'] = el}
                            />
                        </div>
                        <div style={{ width: isMobile ? "350px" : "525px", height: isMobile ? "500px" : "243px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                            <Typography variant='h6' sx={{ display: "flex", alignItems: "center", fontSize: "1rem", fontFamily: theme.fonts.Light, fontWeight: 500, color: theme.colors.white }}>
                                Upload  file
                            </Typography>
                            <Grid container sx={{ display: "flex", justifyContent: "space-around", }}>
                                <Grid item sx={{ width: "15rem", height: "203px", display: "flex", justifyContent: "center", alignItems: "center", background: theme.colors.darkgrey, borderRadius: "8px", marginBottom: "5%" }}>
                                    <div style={{ width: "154px", height: "41px", display: "flex", cursor: "pointer", justifyContent: "space-between", flexDirection: "column" }}
                                        onClick={() => handleClick("audio")}
                                    >
                                        <div style={{ textAlign: "center" }}>
                                            <UploadFileIcon sx={{ width: "24px", height: "24px", color: theme.colors.textcolor }} />
                                        </div>
                                        <Typography variant='h6' sx={{
                                            textAlign: "center",
                                            width: "wrap-content",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            lineHeight: "20px",
                                            fontSize: "0.65rem",
                                            fontFamily: theme.fonts.Light,
                                            fontWeight: 400,
                                            color: theme.colors.textcolor,
                                            overflow: media.audio !== null ? "hidden" : "",
                                            whiteSpace: media.audio !== null ? "nowrap" : "",
                                            textOverflow: media.audio !== null ? "ellipsis" : ""
                                        }}>
                                            {media.audio ? media.audio.name : "MP4 or MP3. Max 1Gb. Drag or choose your file to upload"}
                                        </Typography>

                                        <input
                                            type="file"
                                            style={{ visibility: "hidden", position: "absolute", top: "-9999px", }}
                                            onChange={(e) => handleImageChange('audio', e)}
                                            ref={(el) => fileInputRef.current['audio'] = el}
                                        />
                                    </div>
                                </Grid>
                                <Grid item sx={{ width: "15rem", height: "203px", display: "flex", justifyContent: "center", alignItems: "center", background: theme.colors.darkgrey, borderRadius: "8px" }}>
                                    <div style={{ width: "153px", height: "41px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                        <div style={{ textAlign: "center" }}>
                                            <UploadFileIcon sx={{ width: "24px", height: "24px", color: theme.colors.textcolor }} />
                                        </div>
                                        <Typography variant='h6' sx={{ display: "flex", alignItems: "center", textAlign: "center", lineHeight: "20px", fontSize: "0.65rem", fontFamily: theme.fonts.Light, fontWeight: 400, color: theme.colors.textcolor }}>
                                            MP4 or MP3. Max 1Gb Or select from LiveLoop Cloud..
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{ width: isMobile ? "350px" : "525px", height: isMobile ? "500px" : "120px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                            <Typography variant='h6' sx={{ display: "flex", alignItems: "center", fontSize: "1rem", fontFamily: theme.fonts.Light, fontWeight: 500, color: theme.colors.white }}>
                                Upload audio file
                            </Typography>
                            <Grid container sx={{ display: "flex", justifyContent: "space-around", }}>
                                <Grid item sx={{ width: "7rem", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", background: theme.colors.darkgrey, borderRadius: "8px", marginBottom: "5%" }}>
                                    <div style={{ width: "6rem", height: "41px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}
                                        onClick={() => handleClick("sound1")}
                                    >
                                        <div style={{ textAlign: "center" }}>
                                            <UploadFileIcon sx={{ width: "24px", height: "24px", color: theme.colors.textcolor }} />
                                        </div>
                                        <Typography variant='h6' sx={{
                                            textAlign: "center",
                                            width: "wrap-content",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            lineHeight: "20px",
                                            fontSize: "0.65rem",
                                            fontFamily: theme.fonts.Light,
                                            fontWeight: 400,
                                            color: theme.colors.textcolor,
                                            overflow: media.sound1 !== null ? "hidden" : "",
                                            whiteSpace: media.sound1 !== null ? "nowrap" : "",
                                            textOverflow: media.sound1 !== null ? "ellipsis" : ""
                                        }}>
                                            {media.sound1 ? media.sound1.name.substring(0, 10) + '...' : "upload fisrt audio"}
                                        </Typography>

                                        <input
                                            type="file"
                                            style={{ visibility: "hidden", position: "absolute", top: "-9999px", }}
                                            onChange={(e) => handleImageChange('sound1', e)}
                                            ref={(el) => fileInputRef.current['sound1'] = el}
                                        />
                                    </div>
                                </Grid>
                                <Grid item sx={{ width: "7rem", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", background: theme.colors.darkgrey, borderRadius: "8px", marginBottom: "5%" }}>
                                    <div style={{ width: "6rem", height: "41px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}
                                        onClick={() => handleClick("sound2")}
                                    >
                                        <div style={{ textAlign: "center" }}>
                                            <UploadFileIcon sx={{ width: "24px", height: "24px", color: theme.colors.textcolor }} />
                                        </div>
                                        <Typography variant='h6' sx={{
                                            textAlign: "center",
                                            width: "wrap-content",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            lineHeight: "20px",
                                            fontSize: "0.65rem",
                                            fontFamily: theme.fonts.Light,
                                            fontWeight: 400,
                                            color: theme.colors.textcolor,
                                            overflow: media.audio !== null ? "hidden" : "",
                                            whiteSpace: media.audio !== null ? "nowrap" : "",
                                            textOverflow: media.audio !== null ? "ellipsis" : ""
                                        }}>
                                            {media.sound2 ? media.sound2.name.substring(0, 10) + '...' : "upload second audio"}
                                        </Typography>

                                        <input
                                            type="file"
                                            style={{ visibility: "hidden", position: "absolute", top: "-9999px", }}
                                            onChange={(e) => handleImageChange('sound2', e)}
                                            ref={(el) => fileInputRef.current['sound2'] = el}
                                        />
                                    </div>
                                </Grid>
                                <Grid item sx={{ width: "7rem", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", background: theme.colors.darkgrey, borderRadius: "8px", marginBottom: "5%" }}>
                                    <div style={{ width: "6rem", height: "41px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}
                                        onClick={() => handleClick("sound3")}
                                    >
                                        <div style={{ textAlign: "center" }}>
                                            <UploadFileIcon sx={{ width: "24px", height: "24px", color: theme.colors.textcolor }} />
                                        </div>
                                        <Typography variant='h6' sx={{
                                            textAlign: "center",
                                            width: "wrap-content",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            lineHeight: "20px",
                                            fontSize: "0.65rem",
                                            fontFamily: theme.fonts.Light,
                                            fontWeight: 400,
                                            color: theme.colors.textcolor,
                                            overflow: media.audio !== null ? "hidden" : "",
                                            whiteSpace: media.audio !== null ? "nowrap" : "",
                                            textOverflow: media.audio !== null ? "ellipsis" : ""
                                        }}>
                                            {media.sound3 ? media.sound3.name.substring(0, 10) + '...' : "upload third audio"}
                                        </Typography>

                                        <input
                                            type="file"
                                            style={{ visibility: "hidden", position: "absolute", top: "-9999px", }}
                                            onChange={(e) => handleImageChange('sound3', e)}
                                            ref={(el) => fileInputRef.current['sound3'] = el}
                                        />
                                    </div>
                                </Grid>
                                <Grid item sx={{ width: "7rem", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", background: theme.colors.darkgrey, borderRadius: "8px", marginBottom: "5%" }}>
                                    <div style={{ width: "6rem", height: "41px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}
                                        onClick={() => handleClick("sound4")}
                                    >
                                        <div style={{ textAlign: "center" }}>
                                            <UploadFileIcon sx={{ width: "24px", height: "24px", color: theme.colors.textcolor }} />
                                        </div>
                                        <Typography variant='h6' sx={{
                                            textAlign: "center",
                                            width: "wrap-content",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            lineHeight: "20px",
                                            fontSize: "0.65rem",
                                            fontFamily: theme.fonts.Light,
                                            fontWeight: 400,
                                            color: theme.colors.textcolor,
                                            overflow: media.audio !== null ? "hidden" : "",
                                            whiteSpace: media.audio !== null ? "nowrap" : "",
                                            textOverflow: media.audio !== null ? "ellipsis" : ""
                                        }}>
                                            {media.sound4 ? media.sound4.name.substring(0, 10) + '...' : "upload fourth audio"}
                                        </Typography>

                                        <input
                                            type="file"
                                            style={{ visibility: "hidden", position: "absolute", top: "-9999px", }}
                                            onChange={(e) => handleImageChange('sound4', e)}
                                            ref={(el) => fileInputRef.current['sound4'] = el}
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{ width: isMobile ? "350px" : "525px", height: "336px", }}>
                            <Typography variant='h6' sx={{ display: "flex", alignItems: "center", fontSize: "1rem", fontFamily: theme.fonts.Light, fontWeight: 500, color: theme.colors.white }}>
                                Item Details
                            </Typography>
                            <InputField
                                label="Item name"
                                inputName="itemName"
                                value={state.itemName}
                                onChange={handleChange}
                                placeholder='e. g. "New Loop" '
                                height="48px"
                                fontsize="14px"
                                labelfontSize="12px"
                            />
                            <InputField
                                label="Description"
                                inputName="description"
                                value={state.description}
                                onChange={handleChange}
                                placeholder='e. g. “After purchasing you will able to recived the loop sound file...”'
                                height="48px"
                                fontsize="14px"
                                labelfontSize="12px"
                            />
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <InputField
                                    label="Price"
                                    inputName="price"
                                    value={state.price}
                                    onChange={handleChange}
                                    boxWidth="6.4rem"
                                    placeholder='0.001'
                                    height="48px"
                                    fontsize="14px"
                                    labelfontSize="12px"
                                />
                                <InputField
                                    label="Size"
                                    inputName="size"
                                    value={state.size}
                                    onChange={handleChange}
                                    boxWidth="7.5rem"
                                    placeholder='e. g. 2.45’'
                                    height="48px"
                                    fontsize="14px"
                                    labelfontSize="12px"
                                />
                                <InputField
                                    label="Style"
                                    inputName="style"
                                    value={state.style}
                                    onChange={handleChange}
                                    boxWidth="7.5rem"
                                    placeholder='e. g. Rock'
                                    height="48px"
                                    fontsize="14px"
                                    labelfontSize="12px"
                                />
                                <InputField
                                    label="Instrument"
                                    inputName="instrument"
                                    value={state.instrument}
                                    onChange={handleChange}
                                    boxWidth="7.5rem"
                                    placeholder='e. g. Piano'
                                    height="48px"
                                    fontsize="14px"
                                    labelfontSize="12px"
                                />
                            </div>
                        </div>
                        <div>
                            <Divider sx={{ background: theme.colors.borderColor, width: isMobile ? "350px" : "525px", }} />
                        </div>
                        <div style={{ width: isMobile ? "350px" : "525px", height: "436px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                            <div style={{ height: "48px" }}>
                                <div style={{ height: "24px", display: "flex", justifyContent: "space-between" }}>
                                    <Typography variant='h6' sx={{ color: theme.colors.white, fontSize: isMobile ? "13px" : "1rem", fontFamily: theme.fonts.Light, fontWeight: 500 }}>
                                        Put on sale
                                    </Typography>
                                    <AntSwitcher />
                                </div>
                                <div style={{ height: "20px", }}>
                                    <Typography variant='h6' sx={{ color: theme.colors.textcolor, fontSize: "0.8rem", fontFamily: theme.fonts.Light, fontWeight: 400 }}>
                                        You'll receive bids on this item
                                    </Typography>
                                </div>
                            </div>
                            <div style={{ height: "48px" }}>
                                <div style={{ height: "24px", display: "flex", justifyContent: "space-between" }}>
                                    <Typography variant='h6' sx={{ color: theme.colors.white, fontSize: isMobile ? "13px" : "1rem", fontFamily: theme.fonts.Light, fontWeight: 500 }}>
                                        Instant sale price
                                    </Typography>
                                    <AntSwitcher />
                                </div>
                                <div style={{ height: "20px", }}>
                                    <Typography variant='h6' sx={{ color: theme.colors.textcolor, fontSize: "0.8rem", fontFamily: theme.fonts.Light, fontWeight: 400 }}>
                                        Enter the price for which the item will be instantly sold
                                    </Typography>
                                </div>
                            </div>
                            <div style={{ height: "48px" }}>
                                <div style={{ height: "24px", display: "flex", justifyContent: "space-between" }}>
                                    <Typography variant='h6' sx={{ color: theme.colors.white, fontSize: isMobile ? "13px" : "1rem", fontFamily: theme.fonts.Light, fontWeight: 500 }}>
                                        Unlock once purchased
                                    </Typography>
                                    <AntSwitcher />
                                </div>
                                <div style={{ height: "20px", }}>
                                    <Typography variant='h6' sx={{ color: theme.colors.textcolor, fontSize: "0.8rem", fontFamily: theme.fonts.Light, fontWeight: 400 }}>
                                        Content will be unlocked after successful transaction
                                    </Typography>
                                </div>
                            </div>
                            <div style={{ height: "196px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                <div style={{ height: "48px" }}>
                                    <div style={{ height: "24px", }}>
                                        <Typography variant='h6' sx={{ color: theme.colors.white, fontSize: isMobile ? "13px" : "1rem", fontFamily: theme.fonts.Light, fontWeight: 500 }}>
                                            Choose collection
                                        </Typography>
                                    </div>
                                    <div style={{ height: "20px", }}>
                                        <Typography variant='h6' sx={{ color: theme.colors.textcolor, fontSize: "0.8rem", fontFamily: theme.fonts.Light, fontWeight: 400 }}>
                                            Choose an exiting collection or create a new one
                                        </Typography>
                                    </div>
                                </div>
                                <div style={{ width: isMobile ? "350px" : "525px", height: "124px", display: "flex", flexWrap: "nowrap", overflowX: "auto", }}>
                                    <style>
                                        {`
                                            /* Hide scrollbar for WebKit browsers */
                                            ::-webkit-scrollbar {
                                                width: 0px;
                                            }
                                        `}
                                    </style>
                                    {/* <div style={{ display: "flex" }}>
                                        <CustomCard />
                                        <CustomCard title="Loops 2023" icon=" " iconColor={theme.colors.yellow} />
                                        <CustomCard title="Loops 2022" icon=" " iconColor={theme.colors.pink} />
                                        <CustomCard title="Loops 2021" icon=" " iconColor={theme.colors.yellow} />
                                        <CustomCard title="Loops 2021" icon=" " iconColor={theme.colors.yellow} />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {isLoding ?
                            <div style={{ width: isMobile ? "350px" : "525px", height: "48px", display: "flex", justifyContent: "space-between" }}>
                                <Button sx={{ width: "167px", height: isMobile ? "36px" : "40px", display: "flex", justifyContent: "space-between", padding: "0 15px", background: theme.colors.yellow, borderRadius: "40px", }}>
                                    <Typography variant='h6' disabled={true} sx={{ color: theme.colors.black, fontSize: isMobile ? "13px" : "1rem", fontFamily: theme.fonts.Light, fontWeight: 700 }}>
                                        Loding...
                                    </Typography>
                                    <Box sx={{ width: '30px', height: '30px' }}>
                                        <CircularProgress size={30} sx={{ color: "black" }} />
                                    </Box>
                                </Button>
                                <div style={{ width: "168px", height: "48px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div style={{ color: theme.colors.white }}>Auto saving</div>
                                    <div></div>
                                </div>
                            </div>
                            :
                            <div style={{ width: isMobile ? "350px" : "525px", height: "48px", display: "flex", justifyContent: "space-between" }}>
                                <Button sx={{ width: "167px", height: isMobile ? "36px" : "40px", display: "flex", justifyContent: "space-between", padding: "0 15px", background: theme.colors.yellow, borderRadius: "40px", }}
                                    onClick={handleSubmit}
                                >
                                    <Typography variant='h6' disabled={true} sx={{ color: theme.colors.black, fontSize: isMobile ? "13px" : "1rem", fontFamily: theme.fonts.Light, fontWeight: 700 }}>
                                        Create item
                                    </Typography>
                                    <ArrowRightAltIcon sx={{ color: theme.colors.black, width: "16px", height: "16px" }} />
                                </Button>
                                {/* <div style={{ width: "168px", height: "48px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div style={{ color: theme.colors.white }}>Auto saving</div>
                                    <div></div>
                                </div> */}
                            </div>
                        }
                    </Grid>
                    <Grid item sx={{ padding: "0 4%" }}>

                        <MusicCard
                            handleClick={handleClear}
                            nftImage={selectedMedia.cover}
                            itemIcon={selectedMedia.cover == null ? backgroundImage : selectedMedia.cover}
                            nftMusic={media.audio}
                            itemName={state.itemName} itemPrice={state.price}
                            // artistName={user.artistName} ownerName={user.fullName}
                            // artistProfile={user.profilePhoto.url} ownerProfile={user.profilePhoto.url}
                        />
                    </Grid>
                </Grid>
            </Grid >
            <Footer />
        </div >
    )
}
