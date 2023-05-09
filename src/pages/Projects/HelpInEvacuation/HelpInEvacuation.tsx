import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ContainerTypes } from 'core/constants/common';
import DetailedInformationPageContainer from 'containers/DetailedInformationPageContainer';
import { useTranslation } from 'react-i18next';

const HelpInEvacuation = () => {
  const { t } = useTranslation();
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const numbersStyle = {
    color: colors.violet,
    ...fonts.montserratSemibold40,
    lineHeight: '40px',
  };
  const listStyle = {
    listStyleType: 'disc',
    padding: '0 0 0 30px',
  };
  const listItemsStyle = {
    display: 'list-item',
    padding: 0,
  };
  const rowItemStyle = {
    display: 'grid',
    gridTemplateColumns: '25px 1fr',
    gap: '14px',
    paddingTop: '11px',
  };
  return (
    <DetailedInformationPageContainer
      name={t('ourProjectsPage.helpInEvacuation.header')}
      containerType={ContainerTypes.projects}
    >
      <>
        <Grid paddingTop={'17px'}>
          <Typography sx={normalTextStyle}>{t('ourProjectsPage.helpInEvacuation.p1')}</Typography>
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} gap={'50px'} paddingTop={'17px'}>
          <Grid>
            <Typography
              sx={{
                color: colors.matteBlack,
                ...fonts.montserratSemibold28,
              }}
            >
              {t('ourProjectsPage.helpInEvacuation.listHeader')}
            </Typography>
            <Grid sx={rowItemStyle}>
              <Typography sx={numbersStyle}>1</Typography>
              <Typography sx={normalTextStyle}>
                {t('ourProjectsPage.helpInEvacuation.listItem1')}
              </Typography>
            </Grid>
            <Grid sx={rowItemStyle}>
              <Typography sx={numbersStyle}>2</Typography>
              <Typography sx={normalTextStyle}>
                {t('ourProjectsPage.helpInEvacuation.listItem2')}
              </Typography>
            </Grid>
            <Grid sx={rowItemStyle}>
              <Typography sx={numbersStyle}>3</Typography>
              <Typography sx={normalTextStyle}>
                {t('ourProjectsPage.helpInEvacuation.listItem3')}
              </Typography>
            </Grid>
            <Grid sx={rowItemStyle}>
              <Typography sx={numbersStyle}>4</Typography>
              <Typography sx={normalTextStyle}>
                {t('ourProjectsPage.helpInEvacuation.listItem4')}
              </Typography>
            </Grid>
            <Grid sx={rowItemStyle}>
              <Typography sx={numbersStyle}>5</Typography>
              <Typography sx={normalTextStyle}>
                {t('ourProjectsPage.helpInEvacuation.listItem5')}
              </Typography>
            </Grid>
            <Grid sx={rowItemStyle}>
              <Typography sx={numbersStyle}>6</Typography>
              <Typography sx={normalTextStyle}>
                {t('ourProjectsPage.helpInEvacuation.listItem6')}
              </Typography>
            </Grid>
            <Grid sx={rowItemStyle}>
              <Typography sx={numbersStyle}>7</Typography>
              <Typography sx={normalTextStyle}>
                {t('ourProjectsPage.helpInEvacuation.listItem7')}
                <List sx={listStyle}>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={normalTextStyle}>
                      {t('ourProjectsPage.helpInEvacuation.listItem7p1')}
                    </Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={normalTextStyle}>
                      {t('ourProjectsPage.helpInEvacuation.listItem7p2')}
                    </Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={normalTextStyle}>
                      {t('ourProjectsPage.helpInEvacuation.listItem7p3')}
                    </Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={normalTextStyle}>
                      {t('ourProjectsPage.helpInEvacuation.listItem7p4')}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            <Grid sx={rowItemStyle}>
              <Typography sx={numbersStyle}>8</Typography>
              <Typography sx={normalTextStyle}>
                {t('ourProjectsPage.helpInEvacuation.listItem8')}
              </Typography>
            </Grid>
            <Grid sx={rowItemStyle}>
              <Typography sx={numbersStyle}>9</Typography>
              <Typography sx={normalTextStyle}>
                {t('ourProjectsPage.helpInEvacuation.listItem9')}
              </Typography>
            </Grid>
          </Grid>
          <Grid display={'flex'} flexDirection={'column'} alignItems={'flex-end'} gap={'50px'}>
            <Box
              component={'img'}
              width={'282px'}
              height={'380px'}
              alt={'evacuation_help'}
              src={'/images/projects/evacuation_help1.png'}
            />
            <Box
              component={'img'}
              width={'374px'}
              height={'272px'}
              alt={'evacuation_help'}
              src={'/images/projects/evacuation_help2.png'}
            />
            <Box
              component={'img'}
              width={'282px'}
              height={'326px'}
              alt={'evacuation_help'}
              src={'/images/projects/evacuation_help3.png'}
            />
          </Grid>
        </Grid>
      </>
    </DetailedInformationPageContainer>
  );
};

export default HelpInEvacuation;
