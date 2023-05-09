import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ContainerTypes } from 'core/constants/common';
import DetailedInformationPageContainer from 'containers/DetailedInformationPageContainer';
import { useTranslation } from 'react-i18next';

const LargeFamilyHelp = () => {
  const { t } = useTranslation();
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const listItemStyle = {
    ...normalTextStyle,
    display: 'list-item',
    padding: 0,
  };
  const normalTextStyleBold = {
    color: colors.matteBlack,
    ...fonts.montserratBold16,
  };
  return (
    <DetailedInformationPageContainer
      name={t('ourProjectsPage.largeFamilyHelp.header')}
      containerType={ContainerTypes.projects}
    >
      <>
        <Grid paddingTop={'17px'}>
          <Typography sx={normalTextStyle}>{t('ourProjectsPage.largeFamilyHelp.p1')}</Typography>
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} gap={'120px'} paddingTop={'17px'}>
          <Box
            component={'img'}
            width={'400px'}
            height={'290px'}
            alt={'large_family1'}
            src={'/images/projects/large_family1.png'}
          />
          <Grid>
            <List sx={{ listStyleType: 'decimal', padding: 0 }}>
              <ListItem sx={listItemStyle}>
                <Typography sx={normalTextStyle}>
                  {t('ourProjectsPage.largeFamilyHelp.listItem1')}
                  <Typography sx={normalTextStyleBold} display={'inline'}>
                    0504453445
                  </Typography>
                  .
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
                  {t('ourProjectsPage.largeFamilyHelp.listItem2')}
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
                  {t('ourProjectsPage.largeFamilyHelp.listItem3')}
                  <List sx={{ listStyleType: 'disc', padding: '0 0 0 20px' }}>
                    <ListItem sx={listItemStyle}>
                      <Typography sx={normalTextStyle}>
                        {t('ourProjectsPage.largeFamilyHelp.listItem3p1')}
                      </Typography>
                    </ListItem>
                    <ListItem sx={listItemStyle}>
                      <Typography sx={normalTextStyle}>
                        {t('ourProjectsPage.largeFamilyHelp.listItem3p2')}
                      </Typography>
                    </ListItem>
                    <ListItem sx={listItemStyle}>
                      <Typography sx={normalTextStyle}>
                        {t('ourProjectsPage.largeFamilyHelp.listItem3p3')}
                      </Typography>
                    </ListItem>
                    <ListItem sx={listItemStyle}>
                      <Typography sx={normalTextStyle}>
                        {t('ourProjectsPage.largeFamilyHelp.listItem3p4')}
                      </Typography>
                    </ListItem>
                  </List>
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
                  {t('ourProjectsPage.largeFamilyHelp.listItem4')}
                </Typography>
              </ListItem>
              <ListItem sx={{ ...listItemStyle, paddingTop: '10px' }}>
                <Typography sx={normalTextStyle}>
                  {t('ourProjectsPage.largeFamilyHelp.listItem5')}
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
                  {t('ourProjectsPage.largeFamilyHelp.listItem6')}
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} gap={'30px'} paddingTop={'40px'}>
          <Box component={'img'} alt={'large_family1'} src={'/images/projects/large_family2.png'} />
          <Box component={'img'} alt={'large_family1'} src={'/images/projects/large_family3.png'} />
          <Box component={'img'} alt={'large_family1'} src={'/images/projects/large_family4.png'} />
        </Grid>
      </>
    </DetailedInformationPageContainer>
  );
};

export default LargeFamilyHelp;
