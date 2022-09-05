import { Box, Grid } from '@mui/material';
import { imageStyle } from 'core/constants/styles';

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
        src={'/images/aboutUs/children1.png'}
        sx={{
          width: '282px',
          ...imageStyle
        }}
      />
      <Box
        component={'img'}
        alt={'group'}
        src={'/images/aboutUs/group.png'}
        sx={{
          width: '508px',
          ...imageStyle
        }}
      />
      <Box
        component={'img'}
        alt={'children'}
        src={'/images/aboutUs/children2.png'}
        sx={{
          width: '282px',
          ...imageStyle
        }}
      />
    </Grid>
  );
};

export default ChildrenPhotos;
