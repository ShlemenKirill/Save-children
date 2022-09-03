import Header from 'components/Header';
import { Grid } from '@mui/material';
import MainContent from 'pages/Main/Components/MainContent';
import HelpAtWar from 'pages/Main/Components/HelpAtWar/HelpAtWar';
import OurProjects from 'pages/Main/Components/OurProjects/OurProjects';
import AboutUs from 'pages/Main/Components/AboutUs/AboutUs';
import Information from 'pages/Main/Components/Information/Information';

const Main = () => {
  return (
    <Grid>
      <Header />
      <MainContent />
      <HelpAtWar />
      <OurProjects />
      <AboutUs />
      <Information />
    </Grid>
  );
};

export default Main;
