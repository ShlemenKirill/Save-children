import { Box, Grid } from '@mui/material';

const ChildrenPhotos = () => {
  return (
    <Grid
      id={'children-photos'}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '50px',
        paddingTop: '36px',
      }}
    >
      <Box
        component={'img'}
        alt={'children'}
        src={'images/aboutUs/children1.png'}
        sx={{
          width: '282px',
        }}
      />
      <Box
        component={'img'}
        alt={'group'}
        src={'images/aboutUs/group.png'}
        sx={{
          width: '508px',
        }}
      />
      <Box
        component={'img'}
        alt={'children'}
        src={'images/aboutUs/children2.png'}
        sx={{
          width: '282px',
        }}
      />
    </Grid>
  );
};

export default ChildrenPhotos;
