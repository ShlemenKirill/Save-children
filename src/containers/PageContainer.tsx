import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import { colors } from 'core/constants/colors';
import { Grid } from '@mui/material';

export interface IPageContainerProps {
  children: JSX.Element;
}

const PageContainer = ({ children }: IPageContainerProps) => {
  return (
    <Grid>
      <Header />
      <ScrollToTop />
      <Grid
        display={'flex'}
        flexDirection={'column'}
        sx={{
          backgroundColor: colors.mainBackground,
          width: '1169px',
          paddingTop: '27px',
          paddingBottom: '130px',
          margin: 'auto',
        }}
      >
        {children}
      </Grid>
      <Footer />
    </Grid>
  );
};

export default PageContainer;
