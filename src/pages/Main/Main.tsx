import React from 'react';
import { Grid } from '@mui/material';
import MainContent from 'pages/Main/Components/MainContent';
import HelpAtWar from 'pages/Main/Components/HelpAtWar';
import OurProjects from 'pages/Main/Components/OurProjects';
import AboutUs from 'pages/Main/Components/AboutUs';
import Information from 'pages/Main/Components/Information';
import { colors } from 'core/constants/colors';
import Header from 'components/Header';
import ScrollToTop from 'components/ScrollToTop';
import Footer from 'components/Footer';

const Main = () => {
  return (
    <Grid
      sx={{
        background: colors.mainBackground,
        '@media (max-width: 1169px)': {
          width: '1169px',
        },
      }}
    >
      <Header />
      <ScrollToTop />
      <MainContent />
      <HelpAtWar />
      <OurProjects />
      <AboutUs />
      <Information />
      <Footer />
    </Grid>
  );
};

export default Main;
