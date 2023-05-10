import { Grid, Link, Typography } from '@mui/material';
import PageContainer from 'containers/PageContainer';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import {
  FACEBOOK_LINK_SAVE_CHILDREN,
  FACEBOOK_LINK_SHELTER,
  INSTAGRAM_LINK,
  MAP_LINK,
} from 'core/constants/common';
import MapMarker from 'components/Icons/MapMarker';
import Phone from 'components/Icons/Phone';
import MailIcon from 'components/Icons/MailIcon';
import FacebookIcon from 'components/Icons/FacebookIcon';
import InstagramIcon from 'components/Icons/InstagramIcon';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();
  const mainTextStyle = {
    ...fonts.montserratMedium16,
    color: colors.matteBlack,
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
    },
  };
  const rowStyle = {
    paddingTop: '13px',
    width: 'max-content',
    display: 'grid',
    gridTemplateColumns: '35px auto 1fr',
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
            {t('contactsPage.header')}
          </Typography>
          <Grid paddingTop={'17px'} width={'max-content'}>
            <Link underline='none' target={'_blank'} rel={'noreferrer'} href={MAP_LINK}>
              <Grid sx={rowStyle}>
                <MapMarker />
                <Typography sx={mainTextStyle}>KIEV, Ukraine</Typography>
              </Grid>
            </Link>
            <Link underline='none' rel={'noreferrer'} href={'tel:+380 800 213 452'}>
              <Grid sx={rowStyle}>
                <Phone />
                <Typography sx={mainTextStyle}>+380 800 213 452</Typography>
                <Typography
                  sx={{
                    ...fonts.montserratNormal16,
                    color: colors.grey,
                    paddingLeft: '17px',
                  }}
                >
                  {t('contactsPage.t1')}
                </Typography>
              </Grid>
            </Link>
            <Link underline='none' rel={'noreferrer'} href={'tel:+380 504 453 445'}>
              <Grid sx={rowStyle}>
                <Phone />
                <Typography sx={mainTextStyle}>+380 504 453 445</Typography>
                <Typography
                  sx={{
                    ...fonts.montserratNormal16,
                    color: colors.grey,
                    paddingLeft: '17px',
                  }}
                >
                  {t('contactsPage.t2')}
                </Typography>
              </Grid>
            </Link>
            <Link
              href={'mailto:zberezhyd@gmail.com'}
              underline='none'
              target={'_blank'}
              rel={'noreferrer'}
            >
              <Grid sx={rowStyle}>
                <MailIcon color={colors.matteBlack} />
                <Typography sx={mainTextStyle}>zberezhyd@gmail.com</Typography>
              </Grid>
            </Link>
          </Grid>
          <Grid paddingTop={'50px'} width={'max-content'}>
            <Link
              href={FACEBOOK_LINK_SAVE_CHILDREN}
              underline='none'
              target={'_blank'}
              rel={'noreferrer'}
            >
              <Grid sx={rowStyle}>
                <FacebookIcon color={colors.matteBlack} />
                <Typography sx={mainTextStyle}>facebook.com/zbereju.dutuny</Typography>
              </Grid>
            </Link>
            <Link
              href={FACEBOOK_LINK_SHELTER}
              underline='none'
              target={'_blank'}
              rel={'noreferrer'}
            >
              <Grid sx={rowStyle}>
                <FacebookIcon color={colors.matteBlack} />
                <Typography sx={mainTextStyle}>facebook.com/people/Шелтер-Мамин-дім</Typography>
              </Grid>
            </Link>
            <Link href={INSTAGRAM_LINK} underline='none' target={'_blank'} rel={'noreferrer'}>
              <Grid sx={rowStyle}>
                <InstagramIcon color={colors.matteBlack} />
                <Typography sx={mainTextStyle}>instagram.com/zbereju.dutuny</Typography>
              </Grid>
            </Link>
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default Contacts;
