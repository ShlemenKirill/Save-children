import { Grid, Typography } from '@mui/material';
import PageContainer from 'containers/PageContainer';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import InfoCard from 'components/InfoCard/InfoCard';
import {
  INFORMATION_CHILDREN_IN_STRESS,
  INFORMATION_MOTHER_SAVE_MY_LIFE,
  INFORMATION_SAVE_CHILDREN_BOOK,
  INFORMATION_STOP_VIOLENCE,
  INFORMATION_WAR,
} from 'core/constants/navigation';
import { useTranslation } from 'react-i18next';

const Information = () => {
  const { t } = useTranslation();
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
            {t('informationPage.header')}
          </Typography>
          <Grid display={'flex'} flexDirection={'column'} gap={'45px'} paddingTop={'50px'}>
            <InfoCard
              imageUrl={'/images/information/childrenInStress.png'}
              headerText={t('informationPage.projectHeader1')}
              text={t('informationPage.projectDescription1')}
              pathUrl={INFORMATION_CHILDREN_IN_STRESS}
            />
            <InfoCard
              imageUrl={'/images/information/flag.png'}
              headerText={t('informationPage.projectHeader2')}
              text={t('informationPage.projectDescription2')}
              pathUrl={INFORMATION_WAR}
            />
            <InfoCard
              imageUrl={'/images/information/saveChildren.png'}
              headerText={t('informationPage.projectHeader3')}
              text={t('informationPage.projectDescription3')}
              pathUrl={INFORMATION_MOTHER_SAVE_MY_LIFE}
            />
            <InfoCard
              imageUrl={'/images/information/stopViolence.png'}
              headerText={t('informationPage.projectHeader4')}
              text={t('informationPage.projectDescription4')}
              pathUrl={INFORMATION_STOP_VIOLENCE}
            />
            <InfoCard
              imageUrl={'/images/information/bookSaveChildren.png'}
              headerText={t('informationPage.projectHeader5')}
              text={t('informationPage.projectDescription5')}
              pathUrl={INFORMATION_SAVE_CHILDREN_BOOK}
            />
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default Information;
