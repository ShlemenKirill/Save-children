import { Box, Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ContainerTypes } from 'core/constants/common';
import DownloadLink from 'components/DownloadLink';
import DetailedInformationPageContainer from 'containers/DetailedInformationPageContainer';
import { useTranslation } from 'react-i18next';

const MotherSaveMyLife = () => {
  const { t } = useTranslation();
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const pageImages = [
    '/images/information/mother_save_my_life3.png',
    '/images/information/mother_save_my_life4.png',
  ];
  return (
    <DetailedInformationPageContainer
      name={t('informationPage.projectHeader3')}
      containerType={ContainerTypes.information}
    >
      <>
        <Grid>
          <Typography sx={normalTextStyle} paddingTop={'29px'}>
            {t('informationPage.motherSaveMyLife.p1')}
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            {t('informationPage.motherSaveMyLife.p2')}
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            {t('informationPage.motherSaveMyLife.p3')}
            <DownloadLink
              fileName={'mother_save_my_life_broshure'}
              src={'/documents/mother_save_my_life_broshure.pdf'}
            />
          </Typography>
        </Grid>
        <Grid display={'flex'} flexDirection={'column'} gap={'50px'} paddingTop={'30px'}>
          <Grid display={'flex'} flexDirection={'row'} gap={'50px'}>
            <Box
              component={'img'}
              src={'/images/information/mother_save_my_life1.png'}
              alt={'mother_save_my_life'}
              width={'560px'}
              height={'794px'}
            />
            <Box
              component={'img'}
              src={'/images/information/mother_save_my_life2.png'}
              alt={'mother_save_my_life'}
              width={'560px'}
              height={'794px'}
            />
          </Grid>
          {pageImages.map((imageSrc) => {
            return (
              <Box
                key={imageSrc}
                component={'img'}
                src={imageSrc}
                alt={'/images/information/mother_save_my_life1.png'}
                width={'1170px'}
                height={'830px'}
              />
            );
          })}
        </Grid>
      </>
    </DetailedInformationPageContainer>
  );
};

export default MotherSaveMyLife;
