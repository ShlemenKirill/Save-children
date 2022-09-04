import { Box, Grid, Typography } from '@mui/material';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import Activity from 'pages/About/components/Activity';
import ChildrenPhotos from 'pages/About/components/ChildrenPhotos';
import VolunteersTeam from 'pages/About/components/VolunteersTeam';
import ActivityDescription from 'pages/About/components/ActivityDescription';
import Photos from 'pages/About/components/Photos';

const About = () => {
  return (
    <Grid>
      <Header />
      <Grid
        display={'flex'}
        flexDirection={'column'}
        sx={{
          backgroundColor: colors.mainBackground,
          '@media (min-width: 1440px)': {
            padding: '38px 10% 130px 10%',
          },
          '@media (min-width: 1920px)': {
            padding: '38px 20% 130px 20%',
          },
          '@media (min-width: 2560px)': {
            padding: '38px 27% 130px 27%',
          },
        }}
      >
        <Grid id={'header'}>
          <Typography
            sx={{
              color: colors.mainText,
              ...fonts.montserratMedium85,
            }}
          >
            Про нас
          </Typography>
        </Grid>
        <Activity />
        <ChildrenPhotos />
        <VolunteersTeam />
        <Grid
          id={'all-volunteers'}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: '50px',
          }}
        >
          <Box
            component={'img'}
            alt={'all-volunteers'}
            src={'images/aboutUs/all_volunteers.png'}
            width={'100%'}
          />
        </Grid>
        <ActivityDescription />
        <Photos />
      </Grid>

      <Footer />
    </Grid>
  );
};

export default About;
