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

const Information = () => {
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
            Iнформація
          </Typography>
          <Grid display={'flex'} flexDirection={'column'} gap={'45px'} paddingTop={'50px'}>
            <InfoCard
              imageUrl={'/images/information/childrenInStress.png'}
              headerText={'“Допоможiть, моя дитина в стресi”'}
              text={
                'Перше що потрібно знати мамі — вам і дитині потрібен час. Все що почуває мама- почуває і дитина. Матуся може зрозуміти які ємоції в неї і чому, маленька дитина ні.'
              }
              pathUrl={INFORMATION_CHILDREN_IN_STRESS}
            />
            <InfoCard
              imageUrl={'/images/information/flag.png'}
              headerText={'Як ми працюємо під час війни'}
              text={'Наші основні задачі, та майже щоденні справи.'}
              pathUrl={INFORMATION_WAR}
            />
            <InfoCard
              imageUrl={'/images/information/saveChildren.png'}
              headerText={'Брошура “Матусю, збережи менi життя!”'}
              text={
                'Ми хочемо розповісти вам про справжнісіньке диво — людину, яка ще не народилася.'
              }
              pathUrl={INFORMATION_MOTHER_SAVE_MY_LIFE}
            />
            <InfoCard
              imageUrl={'/images/information/stopViolence.png'}
              headerText={' Брошура “Скажи СТОП насиллю”'}
              text={
                'Брошура пiдготована з метою попереждення насильства над жiнками, пiдтримки кризових вагiтних...'
              }
              pathUrl={INFORMATION_STOP_VIOLENCE}
            />
            <InfoCard
              imageUrl={'/images/information/bookSaveChildren.png'}
              headerText={'Книга “Збереженi життя”'}
              text={'Головне завдання книги - допомогти зберегти життя в утробi.'}
              pathUrl={INFORMATION_SAVE_CHILDREN_BOOK}
            />
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default Information;
