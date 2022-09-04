import { Grid, Link, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import ProjectCard from 'components/ProjectCard/ProjectCard';

const OurProjects = () => {
  return (
    <Grid
      display={'flex'}
      flexDirection={'row'}
      sx={{
        width: '100%',
        background: colors.mainBackground,
      }}
    >
      <Grid
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
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
        <Grid
          width={'100%'}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'flex-end'}
        >
          <Typography
            sx={{
              ...fonts.montserratSemibold50,
              color: colors.mainText,
            }}
          >
            Наші проекти
          </Typography>
          <Link
            href={'/projects'}
            sx={{
              ...fonts.montserratMedium16,
              color: colors.violet,
            }}
          >
            Дивитися все
          </Link>
        </Grid>
        <Grid
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          sx={{
            paddingTop: '3.125rem',
          }}
        >
          <ProjectCard
            imageUrl={'images/projects/pregnant.png'}
            headerText={'Допомога кризовим вагітним'}
            text={'Faucibus maecenas risus et, egestas.'}
            pathUrl={'/projects'}
          />
          <ProjectCard
            imageUrl={'images/projects/hartHouse.png'}
            headerText={'Дім-турботи "СЕРДЕНЬКО❤"'}
            text={
              'Будинок турботи це не гуртожиток для переселенців. У нього зовсім інші задачі, вони більші та глибші. '
            }
            pathUrl={'/projects'}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OurProjects;
