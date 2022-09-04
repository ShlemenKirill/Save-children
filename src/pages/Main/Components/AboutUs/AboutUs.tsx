import { Box, Grid, Link, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';

const AboutUs = () => {
  return (
    <Grid
      display={'flex'}
      flexDirection={'row'}
      sx={{
        maxWidth: '100%',
        background: 'linear-gradient(89.91deg, #E7EFDA 2.7%, rgba(231, 239, 218, 0) 70.55%)',
      }}
    >
      <Grid
        display={'grid'}
        gridTemplateColumns={'1fr 1fr'}
        justifyContent={'center'}
        gap={'70px'}
        sx={{
          width: '100%',
          '@media (min-width: 1440px)': {
            padding: '4.8rem 10% 5.8rem 10%',
          },
          '@media (min-width: 1920px)': {
            padding: '4.8rem 20% 5.8rem 20%',
          },
          '@media (min-width: 2560px)': {
            padding: '4.8rem 27% 5.8rem 27%',
          },
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
                ...fonts.montserratMedium16,
                color: colors.violet,
                paddingTop: '22px',
                paddingRight: '30px',
              }}
            >
              Дивитися все
            </Link>
          </Grid>
          <Grid display={'flex'} flexDirection={'row'} gap={'100px'} justifyContent={'center'}>
            <Grid>
              <Box component={'img'} alt={'Children'} src={'images/aboutUs/children1.png'} />
            </Grid>
            <Grid
              sx={{
                paddingTop: '150px',
              }}
            >
              <Box component={'img'} alt={'Children'} src={'images/aboutUs/children2.png'} />
            </Grid>
          </Grid>
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} justifyContent={'center'}>
          <Box
            component={'img'}
            alt={'collage'}
            src={'images/aboutUs/collage.png'}
            width={'555px'}
            height={'555px'}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
