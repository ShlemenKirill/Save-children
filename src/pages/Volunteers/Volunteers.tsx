import { Box, Grid, Link, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { VOLUNTEERS_LINK } from 'core/constants/common';
import PageContainer from 'containers/PageContainer';
import { useTranslation } from 'react-i18next';

const Volunteers = () => {
  const { t } = useTranslation();
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
    paddingTop: '10px',
  };
  const listItemTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const listStyle = {
    listStyleType: 'disc',
    padding: '0 0 0 20px',
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
            {t('volunteersPage.header')}
          </Typography>
          <Grid display={'flex'} flexDirection={'row'} gap={'104px'} paddingTop={'50px'}>
            <Box
              component={'img'}
              alt={'volunteers1'}
              src={'/images/volunteers/volunteers1.png'}
              width={'400px'}
              height={'566px'}
              sx={{
                boxShadow: '0px 6px 28px 5px rgba(234, 221, 244, 0.4)',
              }}
            />
            <Grid>
              <Typography sx={{ ...normalTextStyle, paddingTop: 0 }}>
                {t('volunteersPage.p1')}
              </Typography>
              <Typography sx={normalTextStyle}>
                {t('volunteersPage.p2')}
              </Typography>
              <Typography sx={normalTextStyle}>
                {t('volunteersPage.p3')}
              </Typography>
              <Typography sx={normalTextStyle}>
                {t('volunteersPage.listHeader')}
                <List sx={listStyle}>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>{t('volunteersPage.listItem1')}</Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>{t('volunteersPage.listItem2')}</Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>
                      {t('volunteersPage.listItem3')}
                    </Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>
                      {t('volunteersPage.listItem4')}
                    </Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>
                      {t('volunteersPage.listItem5')}
                    </Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>{t('volunteersPage.listItem6')}</Typography>
                  </ListItem>
                  <ListItem sx={listItemsStyle}>
                    <Typography sx={listItemTextStyle}>
                      {t('volunteersPage.listItem7')}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
              <Typography sx={normalTextStyle}>
                {t('volunteersPage.p4')}
              </Typography>
              <Grid paddingTop={'12px'}>
                <Link
                  href={VOLUNTEERS_LINK}
                  target={'_blank'}
                  rel={'noreferrer'}
                  sx={{
                    color: colors.violet,
                    ...fonts.montserratMedium24,
                    textUnderlineOffset: '5px',
                    textDecorationColor: colors.violet,
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {t('volunteersPage.t1')}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default Volunteers;
