import { Box, Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { imageStyle } from 'core/constants/styles';
import PageContainer from 'containers/PageContainer';
import Activity from 'pages/About/components/Activity';
import ChildrenPhotos from 'pages/About/components/ChildrenPhotos';
import VolunteersTeam from 'pages/About/components/VolunteersTeam';
import ActivityDescription from 'pages/About/components/ActivityDescription';
import Photos from 'pages/About/components/Photos';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <Grid
      sx={{
        backgroundColor: colors.mainBackground,
      }}
    >
      <PageContainer>
        <>
          <Grid id={'header'}>
            <Typography
              sx={{
                color: colors.mainText,
                ...fonts.montserratMedium85,
              }}
            >
              {t('aboutPage.aboutUs')}
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
              src={'/images/aboutUs/all_volunteers.png'}
              width={'100%'}
              sx={imageStyle}
            />
          </Grid>
          <ActivityDescription />
          <Photos />
        </>
      </PageContainer>
    </Grid>
  );
};

export default About;
