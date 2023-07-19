import { Box, Grid, Typography } from '@mui/material';
import DetailedInformationPageContainer from 'containers/DetailedInformationPageContainer';
import { ContainerTypes } from 'core/constants/common';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { useTranslation } from 'react-i18next';

const BookSaveChildren = () => {
  const { t } = useTranslation();
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const headerTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratMedium24,
  };
  return (
    <DetailedInformationPageContainer
      name={t('informationPage.projectHeader5')}
      containerType={ContainerTypes.information}
    >
      <>
        <Typography sx={normalTextStyle} paddingTop={'33px'}>
          {t('informationPage.bookSaveChildren.p1')}
        </Typography>
        <Grid display={'flex'} flexDirection={'row'} gap={'50px'}>
          <Box
            paddingTop={'23px'}
            component={'img'}
            src={'/images/information/book-save-child1.png'}
            alt={'book-save-child'}
            width={'758px'}
            height={'520px'}
          />
          <Grid>
            <Typography sx={headerTextStyle} paddingTop={'11px'}>
              {t('informationPage.bookSaveChildren.p2')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'12px'}>
              {t('informationPage.bookSaveChildren.p3')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'7px'}>
              {t('informationPage.bookSaveChildren.p4')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'7px'}>
              {t('informationPage.bookSaveChildren.p5')}
            </Typography>
          </Grid>
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} gap={'70px'}>
          <Grid>
            <Typography sx={headerTextStyle} paddingTop={'49px'}>
              {t('informationPage.bookSaveChildren.p6')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'13px'}>
              {t('informationPage.bookSaveChildren.p7')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'7px'}>
              {t('informationPage.bookSaveChildren.p8')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'7px'}>
              {t('informationPage.bookSaveChildren.p9')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'7px'}>
              {t('informationPage.bookSaveChildren.p10')}
            </Typography>
            <Typography sx={headerTextStyle} paddingTop={'40px'}>
              {t('informationPage.bookSaveChildren.p11')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'13px'}>
              {t('informationPage.bookSaveChildren.p12')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'10px'}>
              {t('informationPage.bookSaveChildren.p13')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'10px'}>
              {t('informationPage.bookSaveChildren.p14')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'10px'}>
              {t('informationPage.bookSaveChildren.p15')}
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'10px'}>
              {t('informationPage.bookSaveChildren.p16')}
            </Typography>
          </Grid>
          <Grid>
            <Box
              paddingTop={'41px'}
              component={'img'}
              src={'/images/information/book-save-child2.png'}
              alt={'book-save-child'}
              width={'368px'}
              height={'498px'}
            />
            <Box
              paddingTop={'70px'}
              component={'img'}
              src={'/images/information/book-save-child3.png'}
              alt={'book-save-child'}
              width={'368px'}
              height={'498px'}
            />
          </Grid>
        </Grid>
      </>
    </DetailedInformationPageContainer>
  );
};

export default BookSaveChildren;
