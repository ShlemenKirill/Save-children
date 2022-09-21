import { Box, Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import PageContainer from 'containers/PageContainer';
import FinancialHelpCard from 'components/FinancialHelpCard';

const WantToHelp = () => {
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
            Хочу допогти
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'30px'}>
            Завдяки вам, наші дорогі благодійники, нам вдається підтримати, допомогти продуктами,
            ліками наші підопічні родини, а їх в нас вже більше 70. Низький уклін кожному чиї серця
            відкриті для добра. Разом — ми Сила Любові та Світла.
          </Typography>
          <Grid paddingTop={'35px'} display={'flex'} flexDirection={'row'} gap={'73px'}>
            <Grid>
              <Typography sx={semiboldTextStyle} width={'max-content'}>
                Допомога родинам
              </Typography>
            </Grid>
            <Grid>
              <Typography sx={normalTextStyle}>
                Щодня кількість дітей, які постраждали внаслідок війни зростає. Вони потребують
                допомоги психолога, ліків, памперсів, одягу. Якщо ви хочете домогти, приєднуйтесь до
                нашої роботи та допоможіть нам забезпечувати постраждалих дітей всім тим, що їм так
                зараз необхідно.
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                Ми підтримуємо родини з Херсону, Черкас, Жмеринки, Вінниці, Харкова, Маріуполя,
                Київської області, Запоріжжя, Краматорську, Донецьку Славянську та Североденецку.
              </Typography>
              <Typography sx={normalTextStyle}>
                Пишіть на{' '}
                <Typography
                  display={'inline'}
                  sx={{
                    ...fonts.montserratSemibold16,
                  }}
                >
                  Viber 0504453445.
                </Typography>
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                Основні потреби на сьогодні:
              </Typography>
              <Grid paddingLeft={'15px'}>
                <Typography sx={normalTextStyle}>1. Продуктові набори</Typography>
                <Typography sx={normalTextStyle}>2. Ліки</Typography>
                <Typography sx={normalTextStyle}>3. Памперси</Typography>
                <Typography sx={normalTextStyle}>4. Дитяче харчування</Typography>
              </Grid>
              <Grid paddingTop={'10px'}>
                <FinancialHelpCard destination={'ДОПОМОГА РОДИНАМ'} />
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Typography sx={normalTextStyle} paddingTop={'25px'}>
              Допомагаючи, робіть це з відчуттям, що допомагаєте кожній живій істоті на планеті.
              Перераховуючи гривню, робіть це з відчуттям, що закриваєте всі фінансові потреби цього
              світу. Купуючи продукти на потреби інших — відчувайте, як годуєте всіх нужденних. Наш
              НАМІР — це 90% результату.
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'10px'}>
              Як таке може бути?
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'10px'}>
              Коли ми даємо, по своїм можливостям, АЛЕ з відкритим і щедрим серцем, в якому бажання
              допомогти, то цією силою бажання ми магнітом притягну десятки нових людей, які
              як янголи злетяться до цього питання! Ми як ліхтарі, які освітять світові цю потребу
              і вона точно буде вирішена і закрита
            </Typography>
          </Grid>
          <Grid paddingTop={'35px'} display={'flex'} flexDirection={'row'} gap={'40px'}>
            <Grid>
              <Typography sx={semiboldTextStyle} width={'max-content'}>
                Акцiя «Чашечка кави»
              </Typography>
            </Grid>
            <Grid>
              <Typography sx={normalTextStyle}>
                Дякуємо кожному, що долучаєтеся до нашої благодійної акції «Чашечка добра/кави».
                І коли відправлятимете наступну чашечку пам’ятайте про силу вашого наміру, яке стане
                світлом.
              </Typography>
              <Grid paddingTop={'10px'}>
                <FinancialHelpCard destination={'АКЦІЯЧАШЕЧКАКАВИ'} />
              </Grid>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                Всі дітки, які на фотографіях, були збережені мамами, які хотіли зробити аборт.
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Акція "чашечка кави" допомогла зібрати потрібні суми та закрити всі потреби мам та
                діток, щоб зберегти життя в утробi.
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
