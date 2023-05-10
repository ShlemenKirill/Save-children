import { Box, Grid, Link, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import PageContainer from 'containers/PageContainer';
import { fonts } from 'core/constants/fonts';
import { useTranslation } from 'react-i18next';

const Reports = () => {
  const {t} = useTranslation();
  const mainImagesSrc = ['/images/reports/report2.png', '/images/reports/report3.png'];
  const additionalImagesSrc = [
    '/images/reports/report4.png',
    '/images/reports/report5.png',
    '/images/reports/report6.png',
    '/images/reports/report7.png',
    '/images/reports/report8.png',
  ];
  const headerTextStyle = {
    ...fonts.montserratNormal24,
    color: colors.matteBlack,
  };
  const normalTextStyle = {
    ...fonts.montserratNormal16,
    color: colors.matteBlack,
  };
  const semiboldTextStyle = {
    ...fonts.montserratSemibold16,
    color: colors.matteBlack,
  };
  const listStyle = {
    listStyleType: 'disc',
    padding: '0 0 0 30px',
  };
  const listItemsStyle = {
    display: 'list-item',
    padding: 0,
  };
  return (
    <Grid
      sx={{
        backgroundColor: colors.mainBackground,
      }}
    >
      <PageContainer>
        <>
          <Typography
            sx={{
              color: colors.matteBlack,
              ...fonts.montserratMedium85,
            }}
          >
            {t('reportsPage.header')}
          </Typography>
          <Grid display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Grid>
              <Typography sx={headerTextStyle} paddingTop={'30px'}>
                {t('reportsPage.list1Header')}
              </Typography>
              <List sx={listStyle}>
                <ListItem sx={listItemsStyle}>
                  <Typography sx={normalTextStyle} paddingTop={'5px'}>
                    {t('reportsPage.list1item1.t1')}
                    <Typography display={'inline'} sx={semiboldTextStyle}>
                      {t('reportsPage.list1item1.t2')}
                    </Typography>{' '}
                    {t('reportsPage.list1item1.t3')}
                  </Typography>
                </ListItem>
                <ListItem sx={listItemsStyle}>
                  <Typography sx={normalTextStyle} paddingTop={'5px'}>
                    {t('reportsPage.list1item2.t1')}
                    <Typography display={'inline'} sx={semiboldTextStyle}>
                      {t('reportsPage.list1item2.t2')}
                    </Typography>
                  </Typography>
                </ListItem>
              </List>
              <Typography sx={headerTextStyle} paddingTop={'60px'}>
                {t('reportsPage.p1')}
              </Typography>
            </Grid>
            <Box
              component={'img'}
              alt={'reports'}
              src={'/images/reports/report1.png'}
              width={'300px'}
              height={'217px'}
            />
          </Grid>
          <Typography sx={normalTextStyle} paddingTop={'20px'}>
            {t('reportsPage.list2item1')}
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            {t('reportsPage.list2item2')}
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            {t('reportsPage.list2item3')}
          </Typography>
          <Grid display={'flex'} flexDirection={'row'} gap={'39px'} paddingTop={'20px'}>
            <Grid display={'flex'} flexDirection={'row'} gap={'39px'}>
              {mainImagesSrc.map((src) => {
                return (
                  <Box
                    key={src}
                    component={'img'}
                    alt={'reports'}
                    src={src}
                    width={'203px'}
                    height={'270px'}
                  />
                );
              })}
            </Grid>
            <Grid>
              <Typography sx={normalTextStyle}>
                {t('reportsPage.list2item4')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('reportsPage.list2item5')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('reportsPage.list2item6')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('reportsPage.list2item7')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('reportsPage.list2item8')}
              </Typography>
              <Link
                href={'https://www.youtube.com/channel/UCFZg-YkFJZ2UX4LUI2ZhEYg'}
                target={'_blank'}
                rel={'noreferrer'}
                sx={{
                  color: colors.violet,
                  ...fonts.montserratSemibold16,
                  textUnderlineOffset: '5px',
                  textDecorationColor: colors.violet,
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {t('reportsPage.t1')}
              </Link>
            </Grid>
          </Grid>
          <Typography sx={normalTextStyle} paddingTop={'20px'}>
            {t('reportsPage.list2item9')}
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            {t('reportsPage.list2item10')}
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            {t('reportsPage.list2item11')}
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            {t('reportsPage.list2item12')}
          </Typography>
          <Grid display={'flex'} flexDirection={'row'} gap={'39px'} paddingTop={'20px'}>
            {additionalImagesSrc.map((src) => {
              return (
                <Box
                  key={src}
                  component={'img'}
                  alt={'reports'}
                  src={src}
                  width={'203px'}
                  height={'270px'}
                />
              );
            })}
          </Grid>
          <Typography sx={normalTextStyle} paddingTop={'20px'}>
            {t('reportsPage.list2item13')}
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            {t('reportsPage.list2item14')}
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            {t('reportsPage.list2item15')}
          </Typography>
          <Grid display={'flex'} flexDirection={'row'} gap={'90px'} paddingTop={'10px'}>
            <Grid>
              <Typography sx={normalTextStyle}>
                {t('reportsPage.list2item16')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('reportsPage.list2item17')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('reportsPage.list2item18')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('reportsPage.list2item19')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('reportsPage.list2item20')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('reportsPage.list2item21')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('reportsPage.list2item22')}
              </Typography>
              <Typography sx={normalTextStyle} paddingTop={'10px'}>
                {t('reportsPage.list2item23')}
              </Typography>
            </Grid>
            <Grid paddingTop={'10px'}>
              <Box
                component={'img'}
                alt={'reports'}
                src={'/images/reports/report9.png'}
                width={'355px'}
                height={'355px'}
              />
            </Grid>
          </Grid>
          <Grid
            paddingTop={'80px'}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
          >
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/dXYIIuYSrxE'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default Reports;
