import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';

export interface IPageContainerProps {
  children: JSX.Element;
}

const PageContainer = ({ children }: IPageContainerProps) => {
  return (
    <>
      <Header />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  );
};

export default PageContainer;
