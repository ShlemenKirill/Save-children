import { Grid } from '@mui/material';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainContent from 'pages/Main/Components/MainContent';
import HelpAtWar from 'pages/Main/Components/HelpAtWar';
import OurProjects from 'pages/Main/Components/OurProjects';
import AboutUs from 'pages/Main/Components/AboutUs';
import Information from 'pages/Main/Components/Information';
import { colors } from 'core/constants/colors';

const Main = () => {
  return (
    <Grid
      sx={{
        background: colors.mainBackground,
      }}
    >
      <Header />
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
