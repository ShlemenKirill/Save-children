import { Box, Grid, Typography } from '@mui/material';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { imageStyle } from 'core/constants/styles';
import Activity from 'pages/About/components/Activity';
import ChildrenPhotos from 'pages/About/components/ChildrenPhotos';
import VolunteersTeam from 'pages/About/components/VolunteersTeam';
import ActivityDescription from 'pages/About/components/ActivityDescription';
import Photos from 'pages/About/components/Photos';

const About = () => {
  return (
    <Grid
      sx={{
        backgroundColor: colors.mainBackground,
      }}
    >
      <Header />
      <Grid
        display={'flex'}
        flexDirection={'column'}
        sx={{
          backgroundColor: colors.mainBackground,
          width: '1169px',
          paddingTop: '38px',
          paddingBottom: '130px',
          margin: 'auto',
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
            sx={imageStyle}
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
