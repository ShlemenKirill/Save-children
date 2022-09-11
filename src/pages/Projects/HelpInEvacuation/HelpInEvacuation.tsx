import { Box, Breadcrumbs, Grid, Link, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import PageContainer from 'containers/PageContainer';
import { PROJECTS } from 'core/constants/navigation';
import { fonts } from 'core/constants/fonts';

const HelpInEvacuation = () => {
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const numbersStyle = {
    color: colors.violet,
    ...fonts.montserratSemibold40,
    lineHeight: '40px',
  };
  const listStyle = {
    listStyleType: 'disc',
    padding: '0 0 0 30px',
  };
  const listItemsStyle = {
    display: 'list-item',
    padding: 0,
  };
  const rowItemStyle = {
    display: 'grid',
    gridTemplateColumns: '25px 1fr',
    gap: '14px',
    paddingTop: '11px',
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
            <Link href={PROJECTS} underline='hover'>
              <Typography
                sx={{
                  color: colors.matteBlack,
                  opacity: '0.7',
                  ...fonts.montserratNormal14,
                }}
              >
                Наши проекты
              </Typography>
            </Link>
            <Typography
              sx={{
                color: colors.matteBlack,
                ...fonts.montserratNormal14,
              }}
            >
              Допомога в евакуацii
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
              Допомога в евакуацii
            </Typography>
          </Grid>
          <Grid paddingTop={'17px'}>
            <Typography sx={normalTextStyle}>
              Евакуація жінок та дітей це тривала робота по багатьом напрямкам. Вилучити людей з
              небезпеки це перший крок, другий це — вилучити небезпеку з людей. Психологічна
              реабілітація важлива як один з компонентів комплексної допомоги. Наші волонтери з
              початку війни допомогли багатьом родинам виїхати з небезпечних місць. Також ми
              допомогли в евакуації дітям-сиротам.
            </Typography>
          </Grid>
          <Grid display={'flex'} flexDirection={'row'} gap={'50px'} paddingTop={'17px'}>
            <Grid>
              <Typography
                sx={{
                  color: colors.matteBlack,
                  ...fonts.montserratSemibold28,
                }}
              >
                Правила поведінки під час евакуації для дітей.
              </Typography>
              <Grid sx={rowItemStyle}>
                <Typography sx={numbersStyle}>1</Typography>
                <Typography sx={normalTextStyle}>
                  Інформація щодо евакуації повинна бути перевірена на достовірність з надійних
                  джерел державних та місцевих органів влади. Ви маєте бути впевнені, що евакуація
                  не ініційована силами окупанта! Будьте уважні та обережні!
                </Typography>
              </Grid>
              <Grid sx={rowItemStyle}>
                <Typography sx={numbersStyle}>2</Typography>
                <Typography sx={normalTextStyle}>
                  Не зволікайте з евакуацією! Якщо є така можливість, обов’язково скористайтесь нею.
                  Це може врятувати вам життя.
                </Typography>
              </Grid>
              <Grid sx={rowItemStyle}>
                <Typography sx={numbersStyle}>3</Typography>
                <Typography sx={normalTextStyle}>
                  Якщо дитина достатньо доросла, щоб зрозуміти батьків, повідомте її, чому і куди ви
                  зараз прямуєте. Якщо дитина продовжуватиме вас перепитувати «чому» і «куди»,
                  намагайтеся кожного разу давати відповідь.
                </Typography>
              </Grid>
              <Grid sx={rowItemStyle}>
                <Typography sx={numbersStyle}>4</Typography>
                <Typography sx={normalTextStyle}>
                  Спілкуйтеся з дитиною спокійно, впевнено та чітко. Не забувайте, що ваш емоційний
                  стан передається вашій дитині.
                </Typography>
              </Grid>
              <Grid sx={rowItemStyle}>
                <Typography sx={numbersStyle}>5</Typography>
                <Typography sx={normalTextStyle}>
                  З дитиною повинна бути інформація, що допоможе їй повернутися до батьків, в разі,
                  якщо вона загубилася. Це може бути навіть записка з контактними даними (ПІБ
                  дитини, дата народження, контактний телефон батьків) в кишені одягу або в рюкзаку.
                  Напишіть цю ж саму інформацію на руці дитини (ближче до ліктя, де напис довше не
                  буде стиратися). До рюкзака, за можливості, також покладіть копії свідоцтва про
                  народження дитини та паспортних даних батьків.
                </Typography>
              </Grid>
              <Grid sx={rowItemStyle}>
                <Typography sx={numbersStyle}>6</Typography>
                <Typography sx={normalTextStyle}>
                  Одягніть дітей по погоді та візьміть з собою додаткові теплі речі, пледи. Також
                  воду та напої. Важко завчасно визначити, скільки потрібно буде очікувати на вулиці
                  та в холодних/жарких приміщеннях.
                </Typography>
              </Grid>
              <Grid sx={rowItemStyle}>
                <Typography sx={numbersStyle}>7</Typography>
                <Typography sx={normalTextStyle}>
                  Навчіть дітей основним правилам поведінки в незнайомих місцях та з незнайомцями:
                  <List sx={listStyle}>
                    <ListItem sx={listItemsStyle}>
                      <Typography sx={normalTextStyle}>не відходити від батьків</Typography>
                    </ListItem>
                    <ListItem sx={listItemsStyle}>
                      <Typography sx={normalTextStyle}>не спілкуватися з чужими людьми</Typography>
                    </ListItem>
                    <ListItem sx={listItemsStyle}>
                      <Typography sx={normalTextStyle}>
                        коли ти загубився: звернися до дорослих, в першу чергу, якщо ти бачиш
                        поліцейського або військового у формі, якщо їх немає — до інших дорослих
                      </Typography>
                    </ListItem>
                    <ListItem sx={listItemsStyle}>
                      <Typography sx={normalTextStyle}>
                        бути слухняним: вести себе тихо або взагалі не говорити, не бігти, не
                        повертатися назад, виконувати прохання батьків з першого разу та бути
                        помічником у всьому
                      </Typography>
                    </ListItem>
                  </List>
                </Typography>
              </Grid>
              <Grid sx={rowItemStyle}>
                <Typography sx={numbersStyle}>8</Typography>
                <Typography sx={normalTextStyle}>
                  Якщо поруч ви почули вибухи чи постріли, треба лягти на землю головою в бік,
                  протилежний до вибухів і прикрити її руками або речами. Після того, як все
                  припинилося, треба перечекати ще до 10 хвилин, а потім просуватися до укриття, не
                  піднімаючись повністю. Якщо сховища поблизу немає, використовуйте нерівності
                  рельєфу (канави, окопи, вирви від вибухів). Або виконуйте вказівки посадових осіб
                  евакуаційних органів та органів охорони громадського порядку на місцях.
                </Typography>
              </Grid>
              <Grid sx={rowItemStyle}>
                <Typography sx={numbersStyle}>9</Typography>
                <Typography sx={normalTextStyle}>
                  Поясніть дітям, якщо вони побачили кинуту валізу чи будь-який інший предмет
                  (мобільний телефон, іграшки тощо), суворо забороняється його торкатися, нахиляти,
                  відкривати, переміщувати чи підіймати. Треба негайно попередити про нього батьків!
                </Typography>
              </Grid>
            </Grid>
            <Grid display={'flex'} flexDirection={'column'} alignItems={'flex-end'} gap={'50px'}>
              <Box
                component={'img'}
                width={'282px'}
                height={'380px'}
                alt={'evacuation_help'}
                src={'/images/projects/evacuation_help1.png'}
              />
              <Box
                component={'img'}
                width={'374px'}
                height={'272px'}
                alt={'evacuation_help'}
                src={'/images/projects/evacuation_help2.png'}
              />
              <Box
                component={'img'}
                width={'282px'}
                height={'326px'}
                alt={'evacuation_help'}
                src={'/images/projects/evacuation_help3.png'}
              />
            </Grid>
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default HelpInEvacuation;
