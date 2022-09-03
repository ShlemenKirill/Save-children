import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';

const HelpAtWar = () => {
  return (
    <Grid
      display={'flex'}
      flexDirection={'row'}
      sx={{
        width: '100%',
        background: 'linear-gradient(89.91deg, #E7EFDA 2.7%, rgba(231, 239, 218, 0) 70.55%)',
      }}
    >
      <Grid
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        sx={{
          width: '100%',
          padding: '4.8rem 4rem 5.8rem 8.4rem',
          zIndex: 100,
        }}
      >
        <Grid display={'flex'} flexDirection={'column'}>
          <Typography
            sx={{
              ...fonts.montserratSemibold40,
              color: colors.mainText,
            }}
          >
            ГО “ЗБЕРЕЖИ ДИТИНУ” на час вiйни надає:
          </Typography>
          <Grid
            sx={{
              paddingTop: '20px',
            }}
          >
            <List sx={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <ListItem
                sx={{
                  display: 'list-item',
                }}
              >
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  Психологiчну пiдтримку
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: 'list-item',
                }}
              >
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  Продуктову допомогу (по Києву)
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: 'list-item',
                }}
              >
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  Продукти та лiки для підопічних родин
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: 'list-item',
                }}
              >
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  Пiдтримку для сирiт
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: 'list-item',
                }}
              >
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  Допомагаемо з перевезенням до безпечних мiст
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid display={'flex'} flexDirection={'column'} justifyContent={'flex-end'}>
          <Box
            component={'img'}
            alt={'We support Ukraine'}
            src={'images/weSupportUkraineFlag.png'}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HelpAtWar;
