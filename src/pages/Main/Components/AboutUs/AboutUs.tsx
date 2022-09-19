import { Box, Grid, Link, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { linkStyle } from 'core/constants/styles';

const AboutUs = () => {
  return (
    <Grid
      display={'flex'}
      flexDirection={'row'}
      sx={{
        maxWidth: '100%',
        background: colors.greenLightBackground,
      }}
    >
      <Grid
        display={'grid'}
        gridTemplateColumns={'1fr 1fr'}
        justifyContent={'center'}
        gap={'84px'}
        sx={{
          width: '1169px',
          paddingTop: '4.8rem',
          paddingBottom: '5.8rem',
          margin: 'auto',
          zIndex: 100,
        }}
      >
        <Grid display={'flex'} flexDirection={'column'}>
          <Grid>
            <Typography
              sx={{
                color: colors.mainText,
                ...fonts.montserratSemibold50,
              }}
            >
              Про нас
            </Typography>
          </Grid>
          <Grid>
            <Typography
              sx={{
                color: colors.matteBlack,
                ...fonts.montserratNormal16,
                paddingTop: '16px',
              }}
            >
              Діяльність благодійної громадської організації «Збережи дитину» спрямована на
              збереження життя дітей та підтримку матерів, які потрапили у складну життєву ситуацію
              та які приймають рішення народжувати, багатодітним матерям та дітям сиротам під час
              війни в Україні.
            </Typography>
          </Grid>
          <Grid display={'flex'} flexDirection={'row'} justifyContent={'flex-end'}>
            <Link
              href={'/about'}
              sx={{
                ...linkStyle,
                paddingRight: '10px',
              }}
            >
              Докладно
            </Link>
          </Grid>
          <Grid
            display={'flex'}
            flexDirection={'row'}
            gap={'84px'}
            justifyContent={'center'}
            paddingTop={'30px'}
          >
            <Grid>
              <Box component={'img'} alt={'Children'} src={'/images/aboutUs/children1.png'} />
            </Grid>
            <Grid
              sx={{
                paddingTop: '80px',
              }}
            >
              <Box component={'img'} alt={'Children'} src={'/images/aboutUs/children2.png'} />
            </Grid>
          </Grid>
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} justifyContent={'center'}>
          <Box
            component={'img'}
            alt={'collage'}
            src={'/images/aboutUs/collage.png'}
            width={'555px'}
            height={'555px'}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
