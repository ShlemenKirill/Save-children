import { Grid } from '@mui/material';
import { colors } from 'core/constants/colors';
import PageContainer from 'containers/PageContainer';

const HelpInEvacuation = () => {
  return (
    <Grid
      sx={{
        backgroundColor: colors.mainBackground,
      }}
    >
      <PageContainer>
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
          HelpInEvacuation
        </Grid>
      </PageContainer>
    </Grid>
  );
};

export default HelpInEvacuation;
