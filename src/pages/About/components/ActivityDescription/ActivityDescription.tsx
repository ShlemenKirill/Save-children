import { Box, Grid, Link, Typography } from '@mui/material';
import { listItemTextStyle } from 'pages/About/styles';
import { imageStyle } from 'core/constants/styles';
import { VOLUNTEERS_LINK } from 'core/constants/common';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { useTranslation } from 'react-i18next';

const ActivityDescription = () => {
  const { t } = useTranslation();
  return (
    <Grid
      id={'activity-description'}
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        paddingTop: '50px',
      }}
    >
      <Grid id={'activity-description-text'}>
        <Typography sx={listItemTextStyle}>{t('aboutPage.activityDescription.p1')}</Typography>
        <Typography sx={{ ...listItemTextStyle, paddingTop: '11px' }}>
          {t('aboutPage.activityDescription.p2')}
          <Link
            href={VOLUNTEERS_LINK}
            sx={{
              color: colors.violet,
              ...fonts.montserratNormal16,
              textUnderlineOffset: '5px',
              textDecorationColor: colors.violet,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {t('aboutPage.activityDescription.link1')}
          </Link>{' '}
          .
        </Typography>
      </Grid>
      <Grid
        id={'activity-description-photo'}
        sx={{
          paddingLeft: '74px',
          height: '343px',
        }}
      >
        <Box
          component={'img'}
          alt={'activity1'}
          src={'/images/aboutUs/activity1.png'}
          sx={imageStyle}
        />
      </Grid>
    </Grid>
  );
};

export default ActivityDescription;
