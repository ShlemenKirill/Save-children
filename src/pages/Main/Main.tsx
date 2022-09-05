import { Grid } from '@mui/material';
import MainContent from 'pages/Main/Components/MainContent';
import HelpAtWar from 'pages/Main/Components/HelpAtWar';
import OurProjects from 'pages/Main/Components/OurProjects';
import AboutUs from 'pages/Main/Components/AboutUs';
import Information from 'pages/Main/Components/Information';
import { colors } from 'core/constants/colors';
import PageContainer from 'containers/PageContainer';

const Main = () => {
  return (
    <Grid
      sx={{
        background: colors.mainBackground,
      }}
    >
      <PageContainer>
        <>
          <MainContent />
          <HelpAtWar />
          <OurProjects />
          <AboutUs />
          <Information />
        </>
      </PageContainer>
    </Grid>
  );
};

export default Main;
