import PageContainer from 'containers/PageContainer';
import { colors } from 'core/constants/colors';
import { Grid } from '@mui/material';

const Projects = () => {
  return (
    <Grid
      sx={{
        backgroundColor: colors.mainBackground,
      }}
    >
      <PageContainer>
        <>
          <Grid
            display={'flex'}
            flexDirection={'column'}
            sx={{
              backgroundColor: colors.mainBackground,
              width: '1169px',
              paddingTop: '10px',
              paddingBottom: '130px',
              margin: 'auto',
            }}
          >
            <span>projects</span>
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default Projects;
