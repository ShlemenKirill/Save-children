import { Box, Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ContainerTypes } from 'core/constants/common';
import DetailedInformationPageContainer from 'containers/DetailedInformationPageContainer';
import { useTranslation } from 'react-i18next';

const ChildInStress = () => {
  const { t } = useTranslation();
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  return (
    <DetailedInformationPageContainer
      name={t('informationPage.projectHeader1')}
      containerType={ContainerTypes.information}
    >
      <>
        <Grid>
          <Typography sx={normalTextStyle} paddingTop={'20px'}>
            {t('informationPage.childInStress.p1')}
          </Typography>
          <Grid display={'grid'} gridTemplateColumns={'45% 55%'} paddingTop={'13px'}>
            <Grid
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Box
                component={'img'}
                alt={'дитина в стресi'}
                src={'/images/information/childrenInStressFull.png'}
                width={'354px'}
                height={'505px'}
              />
            </Grid>

            <Grid>
              <Typography sx={normalTextStyle}>
                {t('informationPage.childInStress.p2')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'12px'}>
                {t('informationPage.childInStress.p3')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'12px'}>
                {t('informationPage.childInStress.p4')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'12px'}>
                {t('informationPage.childInStress.p5')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'12px'}>
                {t('informationPage.childInStress.p6')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'12px'}>
                {t('informationPage.childInStress.p7')}
              </Typography>
            </Grid>
          </Grid>
          <Grid paddingTop={'80px'}>
            <Box
              component={'img'}
              alt={'дитина в стресi'}
              src={'/images/information/psychological_trauma.png'}
              width={'1170px'}
              height={'1141px'}
            />
          </Grid>
        </Grid>
      </>
    </DetailedInformationPageContainer>
  );
};

export default ChildInStress;
