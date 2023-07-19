import { Grid, Link, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { linkStyle } from 'core/constants/styles';
import { INFORMATION_CHILDREN_IN_STRESS, INFORMATION_WAR } from 'core/constants/navigation';
import InfoCard from 'components/InfoCard/InfoCard';
import { useTranslation } from 'react-i18next';

const Information = () => {
  const { t } = useTranslation();
  return (
    <Grid
      display={'flex'}
      flexDirection={'row'}
      sx={{
        width: '100%',
        background: colors.mainBackground,
      }}
    >
      <Grid
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        sx={{
          width: '1169px',
          paddingTop: '4.8rem',
          paddingBottom: '5.8rem',
          margin: 'auto',
          zIndex: 100,
        }}
      >
        <Grid
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          width={'100%'}
        >
          <Typography
            sx={{
              color: colors.mainText,
              ...fonts.montserratSemibold50,
            }}
          >
            {t('mainPage.information.h1')}
          </Typography>
          <Link
            href={'/info'}
            sx={{
              ...linkStyle,
              paddingTop: '22px',
              paddingRight: '30px',
            }}
          >
            {t('mainPage.information.t1')}
          </Link>
        </Grid>
        <Grid
          display={'flex'}
          flexDirection={'column'}
          gap={'45px'}
          sx={{
            paddingTop: '63px',
          }}
        >
          <InfoCard
            imageUrl={'/images/information/childrenInStress.png'}
            headerText={t('mainPage.information.informationHeader1')}
            text={t('mainPage.information.informationDescription1')}
            pathUrl={INFORMATION_CHILDREN_IN_STRESS}
          />
          <InfoCard
            imageUrl={'/images/information/flag.png'}
            headerText={t('mainPage.information.informationHeader2')}
            text={t('mainPage.information.informationDescription2')}
            pathUrl={INFORMATION_WAR}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Information;
