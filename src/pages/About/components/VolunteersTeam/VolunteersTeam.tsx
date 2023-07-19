import { Box, Grid, Typography } from '@mui/material';
import { fonts } from 'core/constants/fonts';
import { colors } from 'core/constants/colors';
import { listItemTextStyle } from 'pages/About/styles';
import { imageStyle } from 'core/constants/styles';
import { useTranslation } from 'react-i18next';

const VolunteersTeam = () => {
  const { t } = useTranslation();
  return (
    <Grid
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        paddingTop: '50px',
      }}
    >
      <Grid
        sx={{
          paddingTop: '10px',
        }}
      >
        <Typography
          sx={{
            ...fonts.montserratMedium24,
            color: colors.matteBlack,
          }}
        >
          {t('aboutPage.volunteersTeam.p1')}
        </Typography>
        <Typography
          sx={{
            ...listItemTextStyle,
            paddingTop: '16px',
          }}
        >
          {t('aboutPage.volunteersTeam.p2')}
        </Typography>
        <Typography
          sx={{
            ...listItemTextStyle,
            paddingTop: '10px',
          }}
        >
          {t('aboutPage.volunteersTeam.p3')}
        </Typography>
        <Typography
          sx={{
            ...listItemTextStyle,
            paddingTop: '10px',
          }}
        >
          {t('aboutPage.volunteersTeam.p4')}
        </Typography>
        <Typography
          sx={{
            ...listItemTextStyle,
            paddingTop: '10px',
          }}
        >
          {t('aboutPage.volunteersTeam.p5')}
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          component={'img'}
          alt={'save-children-team'}
          src={'/images/aboutUs/photoWithHashtag.png'}
          sx={{
            borderRadius: '5px',
            ...imageStyle,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default VolunteersTeam;
