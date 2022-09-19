import PageContainer from 'containers/PageContainer';
import { colors } from 'core/constants/colors';
import { Grid, Typography } from '@mui/material';
import { fonts } from 'core/constants/fonts';
import {
  PROJECTS_EVACUATION_HELP,
  PROJECTS_HART_HOUSE,
  PROJECTS_LARGE_FAMILY_HELP,
  PROJECTS_PREGNANT_HELP,
} from 'core/constants/navigation';
import ProjectCard from 'components/ProjectCard/ProjectCard';
import { Outlet } from 'react-router-dom';

const Projects = () => {
  return (
    <Grid
      sx={{
        backgroundColor: colors.mainBackground,
      }}
    >
      <PageContainer>
        <>
          <Grid display={'flex'} flexDirection={'column'}>
            <Typography
              sx={{
                color: colors.mainText,
                ...fonts.montserratMedium85,
              }}
            >
              Наші проекти
            </Typography>
            <Grid
              display={'flex'}
              flexDirection={'row'}
              gap={'80px'}
              sx={{
                paddingTop: '40px',
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
                headerText={'Дім-турботи "СЕРДЕНЬКО❤"'}
                text={
                  'Будинок турботи це не гуртожиток для переселенців. У нього зовсім інші задачі, вони більші та глибші. '
                }
                pathUrl={PROJECTS_HART_HOUSE}
              />
            </Grid>
            <Grid
              display={'flex'}
              flexDirection={'row'}
              gap={'80px'}
              sx={{
                paddingTop: '80px',
              }}
            >
              <ProjectCard
                imageUrl={'/images/projects/evacuation.png'}
                headerText={'Допомога в евакуації'}
                text={'Евакуація жінок та дітей це тривала робота по багатьом напрямкам.'}
                pathUrl={PROJECTS_EVACUATION_HELP}
              />
              <ProjectCard
                imageUrl={'/images/projects/largeFamily.png'}
                headerText={`Допомога багатодітним сім'ям`}
                text={
                  'Особливо ми любимо працювати з багатодітними родинами, бо діти це благословіння. '
                }
                pathUrl={PROJECTS_LARGE_FAMILY_HELP}
              />
            </Grid>
          </Grid>
        </>
      </PageContainer>
      <Outlet />
    </Grid>
  );
};

export default Projects;
