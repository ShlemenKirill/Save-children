import { Box, Grid, Link, Typography } from '@mui/material';
import { listItemTextStyle } from 'pages/About/styles';
import { imageStyle } from 'core/constants/styles';
import { VOLUNTEERS_LINK } from 'core/constants/common';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';

const ActivityDescription = () => {
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
        <Typography sx={listItemTextStyle}>
          Наша діяльність це співпраця з поліцією, соціальними службами, дитячими будинками,
          будинками милосердя, провідними гінекологами, лікарями, пологовими будинками, світськими
          персонами, найкращими фахівцями в сфері фінансів, юриспруденції, психології, священством,
          сестрами милосердя, будинками матері та дитини, а в реальності України ми співпрацюємо з
          військовими та партнерами які допомогають нам в евакуації родин.
        </Typography>
        <Typography sx={{ ...listItemTextStyle, paddingTop: '11px' }}>
          В 2022 році вийде книга з потужними терапевтичними історіями нашіх підопічних матусь про
          збереження життя —{' '}
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
            «ЗБЕРЕЖЕННІ ЖИТТЯ»
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
