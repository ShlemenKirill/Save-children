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
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
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
              {t('ourProjectsPage.h1')}
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
                headerText={t('ourProjectsPage.projectHeader1')}
                text={t('ourProjectsPage.projectDescription1')}
                pathUrl={PROJECTS_PREGNANT_HELP}
              />
              <ProjectCard
                imageUrl={'/images/projects/hartHouse.png'}
                headerText={`${t('ourProjectsPage.projectHeader2')} \u2764\uFE0F`}
                text={t('ourProjectsPage.projectDescription2')}
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
                headerText={t('ourProjectsPage.projectHeader3')}
                text={t('ourProjectsPage.projectDescription3')}
                pathUrl={PROJECTS_EVACUATION_HELP}
              />
              <ProjectCard
                imageUrl={'/images/projects/largeFamily.png'}
                headerText={t('ourProjectsPage.projectHeader4')}
                text={t('ourProjectsPage.projectDescription4')}
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
