import { Box, Grid } from '@mui/material';

const Photos = () => {
  return (
    <Grid id={'photos'}>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: '30px',
        }}
      >
        <Box component={'img'} alt={'activity2'} src={'images/aboutUs/activity2.png'} />
        <Box component={'img'} alt={'activity3'} src={'images/aboutUs/activity3.png'} />
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: '30px',
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
          }}
        >
          <Box component={'img'} alt={'activity4'} src={'images/aboutUs/activity4.png'} />
          <Box component={'img'} alt={'activity5'} src={'images/aboutUs/activity5.png'} />
        </Grid>
        <Box component={'img'} alt={'activity6'} src={'images/aboutUs/activity6.png'} />
      </Grid>
    </Grid>
  );
};

export default Photos;
