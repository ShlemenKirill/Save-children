import { CircularProgress } from '@mui/material';
import React from 'react';

const AppLoader = () => {
  return (
    <CircularProgress
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        backdropFilter: 'blur(5px)',
      }}
      color='secondary'
    />
  );
};

export default AppLoader;
