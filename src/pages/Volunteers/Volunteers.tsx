import { Box, Grid, Link, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { VOLUNTEERS_LINK } from 'core/constants/common';
import PageContainer from 'containers/PageContainer';

const Volunteers = () => {
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
    paddingTop: '10px',
  };
  const listItemTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const listStyle = {
    listStyleType: 'disc',
    padding: '0 0 0 20px',
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
            Волонтерам
          </Typography>
          <Grid display={'flex'} flexDirection={'row'} gap={'104px'} paddingTop={'50px'}>
            <Box
              component={'img'}
              alt={'volunteers1'}
              src={'/images/volunteers/volunteers1.png'}
              width={'400px'}
              height={'566px'}
            />
            <Grid>
              <Typography sx={{ ...normalTextStyle, paddingTop: 0 }}>
                Громадська організація «Збережи дитину» запрошує в команду.
              </Typography>
              <Typography sx={normalTextStyle}>
                Підтримка життя, підтримка вагітності та материнства — це основні напрямки
                діяльності нашої громадської організації. Ми НАДАЄМО кваліфіковану психологічну,
                юридичну та іншу допомогу для родин які постраждали під час війни, жінкам які
                потрапили у складну життєву ситуацію, думають про переривання вагітності або просто
                потребують підтримки.
              </Typography>
              <Typography sx={normalTextStyle}>
                Пропонуємо приєднатися до нашої команди волонтерів!
              </Typography>
              <Typography sx={normalTextStyle}>
                Ми запрошуємо:
                <List sx={listStyle}>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>Психологів та психотерапевтів;</Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>Юристів та адвокатів;</Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>
                      Спеціалістів по роботі з вагітними;
                    </Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>
                      Педагогів та інструкторів з раннього розвитку;
                    </Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>
                      SMM — менеджерів та людей, які можуть допомогти в просуванні нашої ідеї;
                    </Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>Меценатів та спонсорів;</Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>
                      Волонтерів, у яких просто є бажання допомогати та усіх не байдужих
                      до людського життя!
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
              <Typography sx={normalTextStyle}>
                Збережемо життя разом! Якщо Вам вже є 18 років- заповнюйте Анкету для волонтерів
              </Typography>
              <Grid paddingTop={'12px'}>
                <Link
                  href={VOLUNTEERS_LINK}
                  target={'_blank'}
                  rel={'noreferrer'}
                  sx={{
                    color: colors.violet,
                    ...fonts.montserratMedium24,
                    textUnderlineOffset: '5px',
                    textDecorationColor: colors.violet,
                  }}
                >
                  Анкета для волонтерiв
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default Volunteers;
