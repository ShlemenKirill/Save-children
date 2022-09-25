import { Grid, Link, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { PROJECTS, PROJECTS_PREGNANT_HELP } from 'core/constants/navigation';
import { linkStyle } from 'core/constants/styles';
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
          width: '1169px',
          paddingTop: '4.8rem',
          paddingBottom: '5.8rem',
          margin: 'auto',
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
          <Link href={PROJECTS} sx={linkStyle}>
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
            imageUrl={'/images/projects/pregnant.png'}
            headerText={'Допомога кризовим вагітним'}
            text={
              'Психологи служби консультують жінок, які зіткнулися з проблемою незапланованої вагітності'
            }
            pathUrl={PROJECTS_PREGNANT_HELP}
          />
          <ProjectCard
            imageUrl={'/images/projects/hartHouse.png'}
            headerText={'Дім-турботи "СЕРДЕНЬКО \u2764\uFE0F"'}
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
