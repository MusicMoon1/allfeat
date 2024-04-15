import React, { useEffect, useState } from 'react';
import { Grid, useMediaQuery, Modal, Fade, Typography, Box } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '../../../components/Library/Card';
import AudioCard from '../../../components/MarketPlace/AudioCard';
import NftInfoCard from '../../../components/MarketPlace/NftInfoCard';
import { theme } from '../../../utils/Theme';
import CloseIcon from '@mui/icons-material/Close';
import BackgroundButton from '../../../components/Login/BackgroundButton';

const sideBarWidth = 256;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "85%",
    height: "90vh",
    bgcolor: theme.colors.white,
    boxShadow: 24,
    borderRadius: 2,
    overflowY: "scroll",
    p: 2,
};

export default function NftsDetails() {

    const isMobile = useMediaQuery("(max-width:650px)");
    const [detailsNfts, setDetailsNfts] = useState({})
    const [sounds, setSounds] = useState([])
    const [buySound, setBuySound] = useState({})
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);


    // const [searchParams] = useSearchParams();
    // const nftId = searchParams.get('id');
    // const { userNFTs, setGetNFTs, getNFTs } = useFetchNFTs();
    // const { user } = useAuthcontexts();

    // useEffect(() => {
    //     const nfts = getNFTs.find((nft) => nft.id === nftId)
    //     setDetailsNfts(nfts)
    //     setSounds(detailsNfts.sounds)
    // }, [detailsNfts, sounds]);

    // console.log('detailsNfts', detailsNfts)


    const handlePurchase = (sound) => {
        setOpen(true);
        setBuySound(sound)
    }


    // const handleGetNft = async (nfts) => {
    //     nfts.sounds.push(buySound)
    //     const updatedNft = { ...nfts }
    //     console.log('buySound', buySound)
    //     console.log('updatedNft', updatedNft.sounds)
    //     console.log('handleGetNft', nfts.sounds)
    //     let updateNFT = getNFTs.map(oldNft => {
    //         if (oldNft.id === nfts.id)
    //             return nfts
    //         return oldNft
    //     })
    //     setGetNFTs(updateNFT)
    //     try {
    //         await updateDoc(doc(firestore, "NFTs", nfts.id), updatedNft);
    //         toast.success("Sound Purchased Successfully")
    //     } catch (e) {
    //         console.error("Error adding document: ", e);
    //         toast.error("SomeThing went Wrong While Purchasing")
    //     }
    // }

    return (
        <>
            <Grid container sx={{ width: isMobile ? "300px" : `calc(100% - ${sideBarWidth}px - 3rem)`, display: "flex", justifyContent: "center" }}>
                <Grid item sx={{ width: isMobile ? "95%" : "67%", height: "auto", padding: isMobile ? "5px" : "20px", display: 'flex', flexDirection: 'column' }}>
                    <Card
                        width={"100%"}
                        height={isMobile ? "300px" : "500px"}
                        imagewidth={isMobile ? "280px" : "100%"}
                        imageheight="100%"
                        infoDisplay="none"
                        cardData={{ image: detailsNfts?.coverPhoto?.url, music: detailsNfts?.audio?.url }}
                    />
                </Grid>
                <Grid item sx={{ width: isMobile ? "300px" : "325px", padding: "20px 10px" }}>
                    <Grid item>
                        <NftInfoCard
                            width="100%"
                            height="200px"
                            cardinfowidth="100%"
                            cardinfoheight="100%"
                            musicInfoWidth="100%"
                            musicInfoHeight="50%"
                            musicInfoText1Part2="18px"
                            musicInfoText2Part2="16px"
                            musicInfoText3Part2="18px"
                            musicInfoPart1Width="60px"
                            musicInfoPart1height="60px"
                            musicInfoPart1ImageWidth="60px"
                            musicInfoPart1Imageheight="60px"
                            artistinfopart1width="112px"
                            artistinfopart2width="122px"
                            artistinfopart1height="56px"
                            itemName={detailsNfts?.itemName} itemPrice={detailsNfts?.price}
                            artistName={detailsNfts?.createdBy?.name} ownerName={detailsNfts?.createdBy?.name}
                            itemIcon={detailsNfts?.coverPhoto?.url && detailsNfts?.coverPhoto?.url}
                            artistProfile={detailsNfts?.createdBy?.profileImage?.url} ownerProfile={detailsNfts?.createdBy?.profileImage.url}
                        />
                    </Grid>
                </Grid>
                <Grid container sx={{ gap: "20px", display: "flex", justifyContent: "center" }}>
                    {sounds && (
                        sounds?.map((sound) => {
                            return (
                                <AudioCard soundName={sound.name} sound={sound.url} purchase={() => { handlePurchase(sound) }} />
                            )
                        })
                    )
                    }

                </Grid>
            </Grid>


            {/* Modal of User NFts */}

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                            <Typography id="transition-modal-title" variant="h5" component="h2" style={{ fontWeight: 700 }}>
                                Select any one NFT
                            </Typography>
                            <div style={{ cursor: "pointer" }} onClick={handleClose}>
                                <CloseIcon />
                            </div>
                        </div>
                        <Grid container spacing={3} sx={{ display: "flex", justifyContent: isMobile ? "center" : "" }}>
                            {
                                userNFTs?.map((nfts, index) => {
                                    return (
                                        <Grid key={index + 1} item sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: "5%" }} >
                                            <Card
                                                width="250px"
                                                height="439px"
                                                imagewidth="250px"
                                                imageheight="258px"
                                                cardinfowidth="250px"
                                                cardinfoheight="180px"
                                                musicInfoWidth="276px"
                                                musicInfoHeight="84px"
                                                musicInfoPart1Width="52px"
                                                musicInfoPart1height="46px"
                                                musicInfoPart1ImageWidth="40px"
                                                musicInfoPart1Imageheight="40px"
                                                musicInfoText1Part2="16px"
                                                musicInfoText2Part2="14px"
                                                musicInfoText3Part2="16px"
                                                artistinfopart1width="112px"
                                                artistinfopart2width="122px"
                                                artistinfopart1height="56px"
                                                artistimageWidth="26px"
                                                artistimageHeight="26px"
                                                link="/dashboard/marketplace"
                                                itemName={nfts.itemName} itemPrice={nfts.price}
                                                artistName={user?.artistName} ownerName={user?.fullName}
                                                itemIcon={nfts.coverPhoto.url && nfts.coverPhoto.url}
                                                artistProfile={user?.profilePhoto.url} ownerProfile={user?.profilePhoto.url}
                                                cardData={{ image: nfts.coverPhoto.url, music: nfts.audio.url }} />
                                            <div style={{ display: "flex", justifyContent: "end", marginTop: "10px" }}>
                                                <BackgroundButton text="Choose" height="40px" fontSize="16px" onClick={() => { handleGetNft(nfts) }} />
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
