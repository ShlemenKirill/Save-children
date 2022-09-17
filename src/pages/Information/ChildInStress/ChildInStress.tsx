import { Box, Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import PageContainer from 'containers/PageContainer';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { INFORMATION } from 'core/constants/navigation';

const ChildInStress = () => {
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  return (
    <Grid
      sx={{
        backgroundColor: colors.mainBackground,
      }}
    >
      <PageContainer>
        <>
          <Breadcrumbs>
            <Link href={INFORMATION} underline='hover'>
              <Typography
                sx={{
                  color: colors.matteBlack,
                  opacity: '0.7',
                  ...fonts.montserratNormal14,
                }}
              >
                Iнформація
              </Typography>
            </Link>
            <Typography
              sx={{
                color: colors.matteBlack,
                ...fonts.montserratNormal14,
              }}
            >
              «Допоможiть, моя дитина в стресi»
            </Typography>
          </Breadcrumbs>
          <Grid
            sx={{
              paddingTop: '24px',
            }}
          >
            <Typography
              sx={{
                color: colors.matteBlack,
                ...fonts.montserratSemibold50,
              }}
            >
              «Допоможiть, моя дитина в стресi»
            </Typography>
          </Grid>
          <Grid>
            <Typography sx={normalTextStyle} paddingTop={'20px'}>
              Перше що потрібно знати мамі — вам і дитині потрібен час. Все що почуває мама- почуває
              і дитина. Матуся може зрозуміти які ємоції в неї і чому, маленька дитина ні.
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
                  Все що дитина зараз чекає від мами- це обійми. Щоб дитина почувала себе захищеною.
                  Співайте разом ті пісеньки які ви співали в мирний час, візьміть на руки дитиниту,
                  загорніть в плед і просто качайте і співайте колискові. Розвантажте тіло своє і
                  дитини. Від страху тіло зжимається, напружується, тіло починає трясти.
                </Typography>
                <Typography sx={normalTextStyle} paddingTop={'12px'}>
                  Ваша задача як мами — створити безпечний простір, навіть якщо він буде лише під
                  пледом чи ковдрою. Теплий солодкий чай, ковдра і мамини колискові — це все що
                  потрібно в стресі дитині щоб заспокоїтися.
                </Typography>
                <Typography sx={normalTextStyle} paddingTop={'12px'}>
                  Коли тіло буде почувати безпеку, можуть піти сльози, емоції, це нормально. Через
                  деякий час, починайте малювати, ліпити, гратися.
                </Typography>
                <Typography sx={normalTextStyle} paddingTop={'12px'}>
                  Будьте готові що від такої напруги дитина може не на довго прихворіти, дати
                  температуру, це також нормально. Повторюйте — теплий солодкий чай, плед, обійми,
                  колискові чи добрі дитячі пісні.
                </Typography>
                <Typography sx={normalTextStyle} paddingTop={'12px'}>
                  Мама повинна стати контейнером для емоцій дитини. Бережіть себе, бо ви цілий
                  Всесвіт для дитини.
                </Typography>
                <Typography sx={normalTextStyle} paddingTop={'12px'}>
                  Психолог Наталия Трухан ❤
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
      </PageContainer>
    </Grid>
  );
};

export default ChildInStress;
