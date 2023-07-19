import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import PageContainer from 'containers/PageContainer';
import { fonts } from 'core/constants/fonts';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
    paddingTop: '10px',
  };
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
            {t('partnersPage.header')}
          </Typography>
          <Grid paddingTop={'20px'}>
            <Typography sx={normalTextStyle}>
              {t('partnersPage.p1')}
            </Typography>
            <Grid width={'810px'} paddingBottom={'20px'}>
              <Typography sx={normalTextStyle}>
                {t('partnersPage.p2')}
              </Typography>
              <Typography sx={normalTextStyle}>
                {t('partnersPage.p3')}
              </Typography>
              <Typography sx={normalTextStyle}>
                {t('partnersPage.p4')}
              </Typography>
            </Grid>
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default Partners;
