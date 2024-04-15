import React from 'react';
import { Box, Grid } from '@mui/material';
import DaoBox from '../../../components/Dao/DaoBox';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Dashboard/Sidebar';
import { theme } from '../../../utils/Theme';

const daoBoxData = [
  {
    id: 1,
    title: "008 - Full Service Agreement",
    summary: "Proposal Summary: The full terms from 004-service-agreement have been provided by the lawyer of Leios, and reviewed by @Fariah Amin",
    passDate: "September 23rd",
    percentage: "0.0",
    status: "closed"
  },
  {
    id: 1,
    title: "007 - TRAX Use Cases",
    summary: "Proposal Summary: The full terms from 004-service-agreement have been provided by the lawyer of Leios, and reviewed by @Fariah Amin",
    passDate: "September 23rd",
    percentage: "0.0",
    status: "closed"
  },
  {
    id: 1,
    title: "008 - Full Service Agreement",
    summary: "Proposal Summary: The full terms from 004-service-agreement have been provided by the lawyer of Leios, and reviewed by @Fariah Amin",
    passDate: "September 23rd",
    percentage: "0.0",
    status: "closed"
  },
  {
    id: 1,
    title: "008 - Full Service Agreement",
    summary: "Proposal Summary: The full terms from 004-service-agreement have been provided by the lawyer of Leios, and reviewed by @Fariah Amin",
    passDate: "September 23rd",
    percentage: "0.0",
    status: "closed"
  },
  {
    id: 1,
    title: "008 - Full Service Agreement",
    summary: "Proposal Summary: The full terms from 004-service-agreement have been provided by the lawyer of Leios, and reviewed by @Fariah Amin",
    passDate: "September 23rd",
    percentage: "0.0",
    status: "closed"
  },
  {
    id: 1,
    title: "008 - Full Service Agreement",
    summary: "Proposal Summary: The full terms from 004-service-agreement have been provided by the lawyer of Leios, and reviewed by @Fariah Amin",
    passDate: "September 23rd",
    percentage: "0.0",
    status: "closed"
  },
  {
    id: 1,
    title: "008 - Full Service Agreement",
    summary: "Proposal Summary: The full terms from 004-service-agreement have been provided by the lawyer of Leios, and reviewed by @Fariah Amin",
    passDate: "September 23rd",
    percentage: "0.0",
    status: "closed"
  },
  {
    id: 1,
    title: "008 - Full Service Agreement",
    summary: "Proposal Summary: The full terms from 004-service-agreement have been provided by the lawyer of Leios, and reviewed by @Fariah Amin",
    passDate: "September 23rd",
    percentage: "0.0",
    status: "closed"
  },
];

export default function DaoBoxList() {
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
            <Navbar logotext="Dao" />
            <Box sx={{ display: "flex", position: "relative" }}>
              <Sidebar boxNo={3} />
              <Grid container>
                {daoBoxData.map((item, index) => (
                  <Grid key={index} item sx={{ height: "320px", display: "flex", justifyContent: "center", margin: "20px 20px 0" }}>
                    <DaoBox
                      title={item.title}
                      summary={item.summary}
                      passDate={item.passDate}
                      percentage={item.percentage}
                      status={item.status}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
