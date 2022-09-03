import Header from 'components/Header';
import { Grid } from '@mui/material';
import MainContent from 'pages/Main/Components/MainContent';
import HelpAtWar from 'pages/Main/Components/HelpAtWar/HelpAtWar';

const Main = () => {
  return (
    <Grid>
      <Header />
      <MainContent />
      <HelpAtWar />
    </Grid>
  );
};

export default Main;
