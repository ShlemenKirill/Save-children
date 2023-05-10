import { Box, Grid, Typography } from '@mui/material';
import DetailedInformationPageContainer from 'containers/DetailedInformationPageContainer';
import { ContainerTypes, NAVIGATION_INFORMATION } from 'core/constants/common';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { useTranslation } from 'react-i18next';

const WorkAtWar = () => {
  const { t } = useTranslation();
  const text = [
    t('informationPage.workAtWar.listItem1'),
    t('informationPage.workAtWar.listItem2'),
    t('informationPage.workAtWar.listItem3'),
    t('informationPage.workAtWar.listItem4'),
    t('informationPage.workAtWar.listItem5'),
    t('informationPage.workAtWar.listItem6'),
    t('informationPage.workAtWar.listItem7'),
    t('informationPage.workAtWar.listItem8'),
    t('informationPage.workAtWar.listItem9'),
    t('informationPage.workAtWar.listItem10'),
  ];
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const numbersStyle = {
    color: colors.violet,
    ...fonts.montserratSemibold40,
  };
  return (
    <DetailedInformationPageContainer
      name={t('informationPage.projectHeader2')}
      containerType={ContainerTypes.information}
    >
      <>
        <Typography sx={normalTextStyle} paddingTop={'30px'}>
          {t('informationPage.workAtWar.listHeader')}
        </Typography>
        <Grid display={'flex'} flexDirection={'row'}>
          <Grid>
            {text.map((element, index) => {
              return (
                <Grid
                  key={index}
                  display={'grid'}
                  gridTemplateColumns={'60px auto'}
                  paddingTop={'15px'}
                >
                  <Typography sx={numbersStyle}>{index + 1}</Typography>
                  <Typography sx={normalTextStyle} width={'556px'}>
                    {element}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
          <Box
            paddingLeft={'45px'}
            paddingTop={'15px'}
            component={'img'}
            alt={'work_at_war'}
            src={'/images/information/work_at_war.png'}
            height={'836px'}
            width={'498px'}
          />
        </Grid>
      </>
    </DetailedInformationPageContainer>
  );
};

export default WorkAtWar;
