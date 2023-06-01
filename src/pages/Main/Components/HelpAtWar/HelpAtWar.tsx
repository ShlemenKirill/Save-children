import React from 'react';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { useTranslation } from 'react-i18next';

const HelpAtWar = () => {
  const { t } = useTranslation();
  const listItemStyle = {
    display: 'list-item',
    padding: 0,
  };
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
            {t('mainPage.helpAtWar.listHeader')}
          </Typography>
          <Grid
            sx={{
              paddingTop: '20px',
              display: 'flex',
              flexDirection: 'row',
              height: 'max-content',
            }}
          >
            <List sx={{ listStyleType: 'disc', padding: '0 0 0 30px', height: 'max-content' }}>
              <ListItem sx={listItemStyle}>
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  {t('mainPage.helpAtWar.listItem1')}
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  {t('mainPage.helpAtWar.listItem2')}
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  {t('mainPage.helpAtWar.listItem3')}
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  {t('mainPage.helpAtWar.listItem4')}
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography
                  sx={{
                    ...fonts.montserratNormal24,
                  }}
                >
                  {t('mainPage.helpAtWar.listItem5')}
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
