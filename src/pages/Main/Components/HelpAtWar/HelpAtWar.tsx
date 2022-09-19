import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';

const HelpAtWar = () => {
  const listItemStyle = {
    display: 'list-item',
    padding: 0,
  };
  const listRef = useRef<HTMLUListElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(listRef.current ? listRef.current.offsetHeight : 0);
  }, [listRef.current]);
  return (
    <Grid
      display={'flex'}
      flexDirection={'row'}
      sx={{
        width: '100%',
        background: colors.greenLightBackground,
      }}
    >
      <Grid
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        sx={{
          width: '1169px',
          paddingTop: '3rem',
          paddingBottom: '4rem',
          margin: 'auto',
          zIndex: 100,
        }}
      >
        <Grid display={'flex'} flexDirection={'column'}>
          <Typography
            sx={{
              ...fonts.montserratSemibold32,
              color: colors.mainText,
            }}
          >
            ГО “ЗБЕРЕЖИ ДИТИНУ” на час вiйни надає:
          </Typography>
          <Grid
            sx={{
              paddingTop: '20px',
              display: 'flex',
              flexDirection: 'row',
              height: height,
            }}
          >
            <List
              ref={listRef}
              sx={{ listStyleType: 'disc', padding: '0 0 0 30px', height: 'max-content' }}
            >
              <ListItem sx={listItemStyle}>
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  Психологiчну пiдтримку
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  Продуктову допомогу (по Києву)
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  Продукти та лiки для підопічних родин
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  Пiдтримку для сирiт
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  Допомагаємо з перевезенням до безпечних мiст
                </Typography>
              </ListItem>
            </List>
            <Grid display={'flex'} flexDirection={'column'} justifyContent={'flex-end'}>
              <Box
                sx={{
                  paddingLeft: '100px',
                  marginBottom: '-150px',
                }}
                component={'img'}
                alt={'We support Ukraine'}
                src={'/images/weSupportUkraineFlag.png'}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HelpAtWar;
