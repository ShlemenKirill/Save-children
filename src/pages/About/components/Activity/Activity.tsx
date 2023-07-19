import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { listStyle, listItemStyle, listItemTextStyle } from 'pages/About/styles';
import { imageStyle } from 'core/constants/styles';
import { useTranslation } from 'react-i18next';

const Activity = () => {
  const { t, i18n } = useTranslation();
  return (
    <Grid
      id={'activity'}
      display={'grid'}
      gridTemplateColumns={'50% 50%'}
      sx={{
        paddingTop: '21px',
      }}
    >
      <Grid id={'activity-text'}>
        <Typography
          sx={{
            color: colors.matteBlack,
            ...fonts.montserratNormal16,
          }}
        >
          {t('aboutPage.activity.p1')}
        </Typography>
        <List sx={listStyle}>
          <ListItem sx={{ ...listItemStyle }}>
            <Typography sx={listItemTextStyle}>{t('aboutPage.activity.listItem1')}</Typography>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <Typography sx={listItemTextStyle}>{t('aboutPage.activity.listItem2')}</Typography>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <Typography sx={listItemTextStyle}>{t('aboutPage.activity.listItem3')}</Typography>
          </ListItem>
        </List>
        <Typography
          sx={{
            color: colors.matteBlack,
            ...fonts.montserratMedium24,
          }}
        >
          {t('aboutPage.activity.p2')}
        </Typography>
        <List sx={listStyle}>
          <ListItem sx={listItemStyle}>
            <Typography sx={listItemTextStyle}>{t('aboutPage.activity.listItem4')}</Typography>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <Typography sx={listItemTextStyle}>{t('aboutPage.activity.listItem5')}</Typography>
          </ListItem>
          {i18n.language !== 'en' && (
            <ListItem sx={listItemStyle}>
              <Typography sx={listItemTextStyle}>{t('aboutPage.activity.listItem6')}</Typography>
            </ListItem>
          )}
        </List>
      </Grid>
      <Grid
        id={'activity-collage'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          component={'img'}
          alt={'collage'}
          src={'/images/aboutUs/collage.png'}
          sx={{
            width: '540px',
            height: '523px',
            ...imageStyle,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Activity;
