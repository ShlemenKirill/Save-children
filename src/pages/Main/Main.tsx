import Header from 'components/Header';
import { Grid } from '@mui/material';
import MainContent from 'pages/Main/Components/MainContent';
import HelpAtWar from 'pages/Main/Components/HelpAtWar/HelpAtWar';
import OurProjects from 'pages/Main/Components/OurProjects/OurProjects';

const Main = () => {
  return (
    <Grid>
      <Header />
      <MainContent />
      <HelpAtWar />
      <OurProjects />
    </Grid>
  );
};

export default Main;
