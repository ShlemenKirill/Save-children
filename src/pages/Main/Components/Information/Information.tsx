import { Grid, Link, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import InfoCard from 'components/InfoCard/InfoCard';

const Information = () => {
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
          width: '100%',
          '@media (min-width: 1440px)': {
            padding: '4.8rem 10% 5.8rem 10%',
          },
          '@media (min-width: 1920px)': {
            padding: '4.8rem 20% 5.8rem 20%',
          },
          '@media (min-width: 2560px)': {
            padding: '4.8rem 27% 5.8rem 27%',
          },
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
            Iнформація
          </Typography>
          <Link
            href={'/info'}
            sx={{
              ...fonts.montserratMedium16,
              color: colors.violet,
              paddingTop: '22px',
              paddingRight: '30px',
            }}
          >
            Дивитися все
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
            imageUrl={'images/information/childrenInStress.png'}
            headerText={'“Допоможiть, моя дитина в стресi”'}
            text={
              'Перше що потрібно знати мамі — вам і дитині потрібен час. Все що почуває мама- почуває і дитина. Матуся може зрозуміти які ємоції в неї і чому, маленька дитина ні.'
            }
            pathUrl={'/info/1'}
          />
          <InfoCard
            imageUrl={'images/information/flag.png'}
            headerText={'Як ми працюємо під час війни'}
            text={'Наші основні задачі, та майже щоденні справи.'}
            pathUrl={'/info/2'}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Information;
