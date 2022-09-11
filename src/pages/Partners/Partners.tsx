import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import PageContainer from 'containers/PageContainer';
import { fonts } from 'core/constants/fonts';

const Partners = () => {
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
    paddingTop: '10px',
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
            Партнерам
          </Typography>
          <Grid paddingTop={'20px'}>
            <Typography sx={normalTextStyle}>
              Відповідальний бізнес у 2022 році — це вже не феномен, а буденність. Тож комерційний
              сектор так само може стати частиною благодійної діяльності. Що для цього потрібно?
              Бажання та трішки зусиль!
            </Typography>
            <Grid width={'810px'} paddingBottom={'20px'}>
              <Typography sx={normalTextStyle}>
                У співпраці з корпоративним сектором, малим і середнім бізнесом, громадськими
                організаціями та благодійними фондами ми йдемо до ПЕРЕМОГИ, де діти-переможців
                живуть в безпечній та квітучий країні.
              </Typography>
              <Typography sx={normalTextStyle}>
                Ставайте партнером! Співпрацюючи з нами, ви допомогаєте сім’ям та дітям «тут
                і зараз». Прозорість та відкритість перед благодійниками — одна з ключових засад
                існування нашої громадської організації. Наша звітність є публічною та доступною
                кожному з 2019 року. Ви можете слідкувати за закупівлями та витратами організації
                на окремій сторінці ( окремо Звітність).
              </Typography>
              <Typography sx={normalTextStyle}>
                Завдяки Вашим донатам ми можемо вчасно закривати потреби нужденних підопічних родин.
              </Typography>
            </Grid>
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default Partners;
