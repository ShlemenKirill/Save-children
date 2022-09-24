import { Box, Grid, Link, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import PageContainer from 'containers/PageContainer';
import { fonts } from 'core/constants/fonts';

const Reports = () => {
  const headerTextStyle = {
    ...fonts.montserratNormal24,
    color: colors.matteBlack,
  };
  const normalTextStyle = {
    ...fonts.montserratNormal16,
    color: colors.matteBlack,
  };
  const semiboldTextStyle = {
    ...fonts.montserratSemibold16,
    color: colors.matteBlack,
  };
  const listStyle = {
    listStyleType: 'disc',
    padding: '0 0 0 30px',
  };
  const listItemsStyle = {
    display: 'list-item',
    padding: 0,
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
            Звітність
          </Typography>
          <Grid display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Grid>
              <Typography sx={headerTextStyle} paddingTop={'30px'}>
                За чотири роки діяльності ГО «Збережи дитину» вдалося:
              </Typography>
              <List sx={listStyle}>
                <ListItem sx={listItemsStyle}>
                  <Typography sx={normalTextStyle} paddingTop={'5px'}>
                    Зберегти{' '}
                    <Typography display={'inline'} sx={semiboldTextStyle}>
                      бiльше 200  дiтей
                    </Typography>{' '}
                    вiд аботьiв. Попередили аборти та зберегли новозароджене життя.
                  </Typography>
                </ListItem>
                <ListItem sx={listItemsStyle}>
                  <Typography sx={normalTextStyle} paddingTop={'5px'}>
                    Надати більше{' '}
                    <Typography display={'inline'} sx={semiboldTextStyle}>
                      20 тонн продуктової допомоги.
                    </Typography>
                  </Typography>
                </ListItem>
              </List>
              <Typography sx={headerTextStyle} paddingTop={'60px'}>
                Звiт про дiяльнiсть благодiйноЇ ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ ГО «ЗБЕРЕЖИ ДИТИНУ».
              </Typography>
            </Grid>
            <Box
              component={'img'}
              alt={'reports'}
              src={'/images/reports/report1.png'}
              width={'300px'}
              height={'217px'}
            />
          </Grid>
          <Typography sx={normalTextStyle} paddingTop={'20px'}>
            1. Гаряча лінія допомоги КРИЗОВИМ вагітним, працює на повну. Нагадуємо, ми працюємо
            по буднях з 09:00 до 19:00. Всього на гарячу лінію звернулось більш ніж 500 жінок.
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            2. Проводимо та підтримуємо спортивні, навчальні, познавальні проекти направлені
            на збереження життя.
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            3. Ми підготували та видали дві брошури про ЗБЕРЕЖЕННЯ ЖИТТЯ та СТОП НАСИЛЛЯ. Брошури
            допомогають жінкам, дітям, родинам, соціальним працівникам, поліції, мед закладам.
          </Typography>
          <Grid display={'flex'} flexDirection={'row'} gap={'39px'} paddingTop={'20px'}>
            <Grid display={'flex'} flexDirection={'row'} gap={'39px'}>
              <Box
                component={'img'}
                alt={'reports'}
                src={'/images/reports/report2.png'}
                width={'203px'}
                height={'270px'}
              />
              <Box
                component={'img'}
                alt={'reports'}
                src={'/images/reports/report3.png'}
                width={'203px'}
                height={'270px'}
              />
            </Grid>
            <Grid>
              <Typography sx={normalTextStyle}>
                4. Стабільно працюють 5 психологів які ведуть консультування та дають психологічну
                підтримку безкоштовно.
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                5. Стабільно працюють юристи та адвокати безкоштовно.
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                6. Ми почали професійно консультувати наших колег, з інших ГО та благодійних фондів.
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                7. На постійній основі проводяться навчальні заходи для сиріт. На регулярній основі
                проводимо психологічні заняття для дітей-сиріт.
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                8. Працює ютюб канал з лекціями про сім’ю та материнство, наслідки абортів
              </Typography>
              <Link
                href={'https://www.youtube.com/channel/UCFZg-YkFJZ2UX4LUI2ZhEYg'}
                target={'_blank'}
                rel={'noreferrer'}
                sx={{
                  color: colors.violet,
                  ...fonts.montserratSemibold16,
                  textUnderlineOffset: '5px',
                  textDecorationColor: colors.violet,
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Збережи дитину Поддержка материнства и семьи
              </Link>
            </Grid>
          </Grid>
          <Typography sx={normalTextStyle} paddingTop={'20px'}>
            9. Налагодили плідну співпрацю з дитячими соціальними центрами, соціальними службами
            та іншими благодійними та соціальними проектами.
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            10. Консультуємо соціальних працівників, лікарів, та працівників шелтерів для жінок
            з дітками.
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            11. Стабільно в місяць передаємо родинам більше 200 кг продуктової допомоги. Та більше
            ніж 200 кг речової, побутової допомоги.
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            12. Відкрили будинок турботи «СЕРДЕНЬКО».
          </Typography>
          <Grid display={'flex'} flexDirection={'row'} gap={'39px'} paddingTop={'20px'}>
            <Box
              component={'img'}
              alt={'reports'}
              src={'/images/reports/report4.png'}
              width={'203px'}
              height={'270px'}
            />
            <Box
              component={'img'}
              alt={'reports'}
              src={'/images/reports/report5.png'}
              width={'203px'}
              height={'270px'}
            />
            <Box
              component={'img'}
              alt={'reports'}
              src={'/images/reports/report6.png'}
              width={'203px'}
              height={'270px'}
            />
            <Box
              component={'img'}
              alt={'reports'}
              src={'/images/reports/report7.png'}
              width={'203px'}
              height={'270px'}
            />
            <Box
              component={'img'}
              alt={'reports'}
              src={'/images/reports/report8.png'}
              width={'203px'}
              height={'270px'}
            />
          </Grid>
          <Typography sx={normalTextStyle} paddingTop={'20px'}>
            13. Підтримали ліками підопічні родини в період пандемії та війни на сумму більше
            70000 грн.
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            14. Надали психологічну, юридичну, фінансову підтримку 340 сім’ям, які опинилися
            в складних життєвих ситуаціях під час війни.
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            15. Забезпечили підтримку 14 вагітних жінок, які не мали постійного місця проживання
            і роботи, щоб припинити жебракування.
          </Typography>
          <Grid display={'flex'} flexDirection={'row'} gap={'90px'} paddingTop={'10px'}>
            <Grid>
              <Typography sx={normalTextStyle}>
                16. Працюємо в кабінеті доабортного консультування при жіночій консультації
                на Червоному Хуторі.
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                17. Проводимо навчання для сестер милосердя.
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                18. Допомогли хлопчику з протезуванням ніжки, щоб стати на дві ноги та піти
                до першого класу.
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                19. Допомогли оплатити чотири дуже дорогі та серйозні операції для діток.
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                20. Зібрали до пологового будинку 48 матусь.
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                21. Готуємо до видання книгу про збережені життя, яка повинна вийти до кінця
                2022 року.
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                22. Надаємо регулярну продуктову допомогу будинку милосердя.
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                23. В нас з’явився свій гімн #Збережидитину".
              </Typography>
            </Grid>
            <Grid paddingTop={'10px'}>
              <Box
                component={'img'}
                alt={'reports'}
                src={'/images/reports/report9.png'}
                width={'355px'}
                height={'355px'}
              />
            </Grid>
          </Grid>
          <Grid
            paddingTop={'80px'}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
          >
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/dXYIIuYSrxE'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default Reports;
