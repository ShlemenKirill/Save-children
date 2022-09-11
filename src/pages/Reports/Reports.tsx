import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import PageContainer from 'containers/PageContainer';
import { fonts } from 'core/constants/fonts';

const Reports = () => {
  return (
    <Grid
      sx={{
        backgroundColor: colors.mainBackground,
      }}
    >
      <PageContainer>
        <>
          <Typography
            sx={{
              color: colors.matteBlack,
              ...fonts.montserratMedium85,
            }}
          >
            Звітність
          </Typography>
        </>
      </PageContainer>
    </Grid>
  );
};

export default Reports;
