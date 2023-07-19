import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ContainerTypes } from 'core/constants/common';
import DetailedInformationPageContainer from 'containers/DetailedInformationPageContainer';
import { useTranslation } from 'react-i18next';

const PregnantHelp = () => {
  const { t } = useTranslation();
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const normalTextStyleSemiBold = {
    color: colors.matteBlack,
    ...fonts.montserratSemibold16,
  };
  const normalTextStyleBold = {
    color: colors.matteBlack,
    ...fonts.montserratBold16,
  };
  return (
    <DetailedInformationPageContainer
      name={t('ourProjectsPage.pregnantHelp.header')}
      containerType={ContainerTypes.projects}
    >
      <>
        <Typography sx={{ ...normalTextStyle, paddingTop: '20px' }}>
          {t('ourProjectsPage.pregnantHelp.p1')}
        </Typography>
        <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
          {t('ourProjectsPage.pregnantHelp.p2')}
        </Typography>
        <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
          {t('ourProjectsPage.pregnantHelp.p3')}
          <Typography display={'inline'} sx={{ ...normalTextStyleBold }}>
            050 445 34 45 Трухан Наталія.
          </Typography>
        </Typography>
        <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
          {t('ourProjectsPage.pregnantHelp.p4')}
        </Typography>
        <Typography
          sx={{ ...fonts.montserratMedium24, color: colors.matteBlack, paddingTop: '21px' }}
        >
          {t('ourProjectsPage.pregnantHelp.t1')}
        </Typography>
        <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
          {t('ourProjectsPage.pregnantHelp.p5')}
        </Typography>
        <Grid display={'flex'} flexDirection={'row'} gap={'55px'} paddingTop={'15px'}>
          <Grid>
            <Box
              paddingTop={'7px'}
              component={'img'}
              alt={'save-children'}
              src={'/images/projects/pregnantFull.png'}
            />
          </Grid>
          <Grid>
            <Typography sx={{ ...normalTextStyleSemiBold }}>
              {t('ourProjectsPage.pregnantHelp.listItem1.header')}
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              {t('ourProjectsPage.pregnantHelp.listItem1.content')}
            </Typography>
            <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '15px' }}>
              {t('ourProjectsPage.pregnantHelp.listItem2.header')}
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              {t('ourProjectsPage.pregnantHelp.listItem2.content')}
            </Typography>
            <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '15px' }}>
              {t('ourProjectsPage.pregnantHelp.listItem3.header')}
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              {t('ourProjectsPage.pregnantHelp.listItem3.content1')}
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              {t('ourProjectsPage.pregnantHelp.listItem3.content2')}
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              {t('ourProjectsPage.pregnantHelp.listItem3.content3')}
            </Typography>
            <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '15px' }}>
              {t('ourProjectsPage.pregnantHelp.listItem4.header')}
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              {t('ourProjectsPage.pregnantHelp.listItem4.content')}
            </Typography>
          </Grid>
        </Grid>
        <Box
          paddingTop={'25px'}
          component={'img'}
          alt={'little-children'}
          src={'/images/projects/little_children.png'}
        />
        <Grid paddingLeft={'500px'}>
          <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '25px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem5.header')}
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem5.content')}
          </Typography>
          <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem6.header')}
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem6.content')}
          </Typography>
        </Grid>
        <Grid display={'flex'} gap={'30px'} paddingTop={'25px'}>
          <Box
            component={'img'}
            alt={'pregnant_women'}
            src={'/images/projects/pregnant_women1.png'}
          />
          <Box
            component={'img'}
            alt={'pregnant_women'}
            src={'/images/projects/pregnant_women2.png'}
          />
          <Box
            component={'img'}
            alt={'pregnant_women'}
            src={'/images/projects/pregnant_women3.png'}
          />
        </Grid>
        <Grid paddingLeft={'500px'}>
          <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '25px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem7.header')}
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem7.listHeader')}
          </Typography>
          <List
            sx={{
              listStyleType: 'disc',
              padding: '0 0 0 30px',
            }}
          >
            <ListItem
              sx={{
                display: 'list-item',
                padding: 0,
              }}
            >
              <Typography sx={{ ...normalTextStyle }}>
                {t('ourProjectsPage.pregnantHelp.listItem7.listItem1')}
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: 'list-item',
                padding: 0,
              }}
            >
              <Typography sx={{ ...normalTextStyle }}>
                {t('ourProjectsPage.pregnantHelp.listItem7.listItem2')}
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: 'list-item',
                padding: 0,
              }}
            >
              <Typography sx={{ ...normalTextStyle }}>
                {t('ourProjectsPage.pregnantHelp.listItem7.listItem3')}
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: 'list-item',
                padding: 0,
              }}
            >
              <Typography sx={{ ...normalTextStyle }}>
                {t('ourProjectsPage.pregnantHelp.listItem7.listItem4')}
              </Typography>
            </ListItem>
          </List>
          <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem7.content1')}
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem7.content2')}
          </Typography>
          <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem8.header')}
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem8.content1')}
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem8.content2')}
          </Typography>
        </Grid>
        <Grid display={'flex'} gap={'30px'} paddingTop={'25px'}>
          <Box
            component={'img'}
            alt={'pregnant_women'}
            src={'/images/projects/pregnant_women4.png'}
          />
          <Box
            component={'img'}
            alt={'pregnant_women'}
            src={'/images/projects/pregnant_women5.png'}
          />
        </Grid>
        <Grid paddingLeft={'500px'}>
          <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '25px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem9.header')}
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem9.content1')}
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem9.content2')}
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem9.content3')}
          </Typography>
          <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem10.header')}
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem10.content1')}
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
            {t('ourProjectsPage.pregnantHelp.listItem10.content2')}
          </Typography>
        </Grid>
      </>
    </DetailedInformationPageContainer>
  );
};

export default PregnantHelp;
