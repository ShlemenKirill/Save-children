import { Grid, Link, Typography } from '@mui/material';
import PageContainer from 'containers/PageContainer';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import {
  FACEBOOK_LINK_SAVE_CHILDREN,
  FACEBOOK_LINK_SHELTER,
  INSTAGRAM_LINK,
} from 'core/constants/common';
import MapMarker from 'components/Icons/MapMarker';
import Phone from 'components/Icons/Phone';
import MailIcon from 'components/Icons/MailIcon';
import FacebookIcon from 'components/Icons/FacebookIcon';
import InstagramIcon from 'components/Icons/InstagramIcon';

const Contacts = () => {
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
            Наші контакти
          </Typography>
          <Grid paddingTop={'17px'} width={'max-content'}>
            <Link
              underline='none'
              target={'_blank'}
              rel={'noreferrer'}
              href={
                'https://www.google.com/maps/place/Kyiv,+Ukraine,+02000/@50.4021702,30.3926088,11z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234'
              }
            >
              <Grid sx={rowStyle}>
                <MapMarker />
                <Typography
                  sx={{
                    ...fonts.montserratMedium16,
                    color: colors.matteBlack,
                  }}
                >
                  KIEV, Ukraine
                </Typography>
              </Grid>
            </Link>
            <Link underline='none' rel={'noreferrer'} href={'tel:+380 800 213 452'}>
              <Grid sx={rowStyle}>
                <Phone />
                <Typography
                  sx={{
                    ...fonts.montserratMedium16,
                    color: colors.matteBlack,
                  }}
                >
                  +380 800 213 452
                </Typography>
                <Typography
                  sx={{
                    ...fonts.montserratNormal16,
                    color: colors.grey,
                    paddingLeft: '17px',
                  }}
                >
                  Безкоштовна гаряча линия
                </Typography>
              </Grid>
            </Link>
            <Link underline='none' rel={'noreferrer'} href={'tel:+380 504 453 445'}>
              <Grid sx={rowStyle}>
                <Phone />
                <Typography
                  sx={{
                    ...fonts.montserratMedium16,
                    color: colors.matteBlack,
                  }}
                >
                  +380 504 453 445
                </Typography>
                <Typography
                  sx={{
                    ...fonts.montserratNormal16,
                    color: colors.grey,
                    paddingLeft: '17px',
                  }}
                >
                  Телефон Голови ГО - Трухан Наталії
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
                <Typography
                  sx={{
                    ...fonts.montserratMedium16,
                    color: colors.matteBlack,
                  }}
                >
                  zberezhyd@gmail.com
                </Typography>
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
                <Typography
                  sx={{
                    ...fonts.montserratMedium16,
                    color: colors.matteBlack,
                  }}
                >
                  facebook.com/zbereju.dutuny
                </Typography>
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
                <Typography
                  sx={{
                    ...fonts.montserratMedium16,
                    color: colors.matteBlack,
                  }}
                >
                  facebook.com/people/Шелтер-Мамин-дім
                </Typography>
              </Grid>
            </Link>
            <Link href={INSTAGRAM_LINK} underline='none' target={'_blank'} rel={'noreferrer'}>
              <Grid sx={rowStyle}>
                <InstagramIcon color={colors.matteBlack} />
                <Typography
                  sx={{
                    ...fonts.montserratMedium16,
                    color: colors.matteBlack,
                  }}
                >
                  instagram.com/zbereju.dutuny
                </Typography>
              </Grid>
            </Link>
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default Contacts;
