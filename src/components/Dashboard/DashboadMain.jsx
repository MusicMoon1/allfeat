import React from 'react'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { theme } from '../../utils/Theme'
import DashboardBox from './DashboardBox'
import library from '../../assets/icons/library2.png'
import market from '../../assets/icons/market.png'
import Dao from '../../assets/icons/dao2.png'
import qr from '../../assets/icons/qr.png'
import cube from '../../assets/cube.png'
import sphere from '../../assets/sphere.png'
import hemisphere from '../../assets/hemisphere.png'
import Torus from '../../assets/Torus.png'



export default function DashboadMain() {
    const isMobile = useMediaQuery("(max-width:600px)");
    return (
        <Grid container spacing={isMobile ? 2 : 3} sx={{ px: 3, py: 3 }}>
            <Grid item>
                <Box sx={{ marginBottom: "7%" }}>
                    <DashboardBox
                        boxWidth={isMobile ? "100%" : "303px"}
                        boxHight="238px"
                        background={theme.colors.yellow}
                        color={theme.colors.black}
                        icon={library}
                        image={sphere}
                        title="My Library"
                        link="/dashboard/library"
                    />
                </Box>
                <Box>
                    <DashboardBox
                        boxWidth={isMobile ? "100%" : "303px"}
                        boxHight="238px"
                        background={theme.colors.lightBlue}
                        color={theme.colors.black}
                        icon={Dao}
                        image={Torus}
                        imageHight={90}
                        imageWidth={125}
                        title="Dao"
                        link="/dashboard/dao"
                    />
                </Box>
            </Grid>
            <Grid item>
                <Box>
                    <DashboardBox
                        boxWidth={isMobile ? "100%" : "565px"}
                        boxHight={isMobile ? "238px" : "497px"}
                        background={theme.colors.grey}
                        icon={market}
                        image={hemisphere}
                        color={theme.colors.white}
                        iconWidth={30}
                        upperBoxHight={180}
                        lowerBoxHight={155}
                        imageHight={isMobile ? 105 : 152}
                        imageWidth={isMobile ? 105 : 152}
                        title="MarketPlace"
                        link="/dashboard/marketplace"
                    />
                </Box>
            </Grid>
            <Grid item>
                <Box>
                    <DashboardBox
                        boxWidth={isMobile ? "100%" : "892px"}
                        boxHight={isMobile ? "238px" : "323px"}
                        background={theme.colors.darkBlue}
                        icon={qr}
                        color={theme.colors.white}
                        image={cube}
                        iconWidth={36}
                        iconHight={36}
                        upperBoxHight={190}
                        imageHight={isMobile ? 90 : 140}
                        imageWidth={isMobile ? 90 : 140}
                        title="Wallet"
                        link="/dashboard/wallet"
                    />
                </Box>
            </Grid>
        </Grid>
    )
}
