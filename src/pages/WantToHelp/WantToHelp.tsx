import { Box, Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import PageContainer from 'containers/PageContainer';
import FinancialHelpCard from 'components/FinancialHelpCard';
import { useTranslation } from 'react-i18next';

const WantToHelp = () => {
  const { t } = useTranslation();
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const semiboldTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratSemibold28,
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
            {t('wantToHelpPage.header')}
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'30px'}>
            {t('wantToHelpPage.p1')}
          </Typography>
          <Grid paddingTop={'35px'} display={'flex'} flexDirection={'row'} gap={'73px'}>
            <Grid>
              <Typography sx={semiboldTextStyle} width={'max-content'}>
                {t('wantToHelpPage.t1')}
              </Typography>
            </Grid>
            <Grid>
              <Typography sx={normalTextStyle}>{t('wantToHelpPage.p2')}</Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('wantToHelpPage.p3')}
              </Typography>
              <Typography sx={normalTextStyle}>
                {t('wantToHelpPage.t2')}
                <Typography
                  display={'inline'}
                  sx={{
                    ...fonts.montserratSemibold16,
                  }}
                >
                  {t('wantToHelpPage.t3')}
                </Typography>
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('wantToHelpPage.listHeader')}
              </Typography>
              <Grid paddingLeft={'15px'}>
                <Typography sx={normalTextStyle}>{t('wantToHelpPage.listItem1')}</Typography>
                <Typography sx={normalTextStyle}>{t('wantToHelpPage.listItem2')}</Typography>
                <Typography sx={normalTextStyle}>{t('wantToHelpPage.listItem3')}</Typography>
                <Typography sx={normalTextStyle}>{t('wantToHelpPage.listItem4')}</Typography>
              </Grid>
              <Grid paddingTop={'10px'}>
                <FinancialHelpCard destination={t('wantToHelpPage.t4')} />
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Typography sx={normalTextStyle} paddingTop={'25px'}>
              {t('wantToHelpPage.p4')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'10px'}>
              {t('wantToHelpPage.p5')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'10px'}>
              {t('wantToHelpPage.p6')}
            </Typography>
          </Grid>
          <Grid paddingTop={'35px'} display={'flex'} flexDirection={'row'} gap={'40px'}>
            <Grid>
              <Typography sx={semiboldTextStyle} width={'max-content'}>
                {t('wantToHelpPage.t5')}
              </Typography>
            </Grid>
            <Grid>
              <Typography sx={normalTextStyle}>
                {t('wantToHelpPage.p7')}
              </Typography>
              <Grid paddingTop={'10px'}>
                <FinancialHelpCard destination={t('wantToHelpPage.t6')} />
              </Grid>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('wantToHelpPage.p8')}
              </Typography>
              <Grid display={'flex'} flexDirection={'column'} gap={'40px'} paddingTop={'30px'}>
                <Grid display={'flex'} flexDirection={'row'} gap={'40px'}>
                  <Box
                    component={'img'}
                    alt={'want_to_help'}
                    src={'/images/wantToHelp/want_to_help1.png'}
                    height={'380px'}
                    width={'380px'}
                  />
                  <Box
                    component={'img'}
                    alt={'want_to_help'}
                    src={'/images/wantToHelp/want_to_help2.png'}
                    height={'380px'}
                    width={'380px'}
                  />
                </Grid>
                <Grid display={'flex'} flexDirection={'row'} gap={'40px'}>
                  <Box
                    component={'img'}
                    alt={'want_to_help'}
                    src={'/images/wantToHelp/want_to_help3.png'}
                    height={'370px'}
                    width={'295px'}
                  />
                  <Box
                    component={'img'}
                    alt={'want_to_help'}
                    src={'/images/wantToHelp/want_to_help4.png'}
                    height={'370px'}
                    width={'462px'}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default WantToHelp;
