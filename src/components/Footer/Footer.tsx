import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import {
  ABOUT_US,
  INFORMATION,
  PARTNERS,
  PROJECTS,
  REPORTS,
  VOLUNTEERS,
} from 'core/constants/navigation';
import Logo from 'components/Logo';
import MailIconWithBackground from 'components/Icons/MailIconWithBackground';
import InstagramIconWithBackground from 'components/Icons/InstagramIconWithBackground';
import FacebookIconWithBackground from 'components/Icons/FacebookIconWithBackground';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const menuItems = [
    { name: t('footer.about'), path: ABOUT_US },
    { name: t('footer.projects'), path: PROJECTS },
    { name: t('footer.reports'), path: REPORTS },
    { name: t('footer.partners'), path: PARTNERS },
    { name: t('footer.volunteers'), path: VOLUNTEERS },
    { name: t('footer.info'), path: INFORMATION },
  ];
  const navigate = useNavigate();
  const secondaryText = {
    paddingTop: '2px',
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const menuItemStyle = {
    ...secondaryText,
    cursor: 'pointer',
    '&:hover': {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '25px',
    },
  };
  const menuHeaderStyle = {
    color: colors.matteBlack,
    ...fonts.montserratSemibold16,
    paddingBottom: '9px',
  };
  return (
    <Grid
      sx={{
        background: colors.footer,
      }}
    >
      <Grid
        display={'flex'}
        flexDirection={'row'}
        alignItems={'flex-start'}
        gap={'17%'}
        sx={{
          width: '1169px',
          paddingTop: '4.375rem',
          paddingBottom: '4.375rem',
          margin: 'auto',
          background: colors.footer,
        }}
      >
        <Logo />
        <Grid>
          <Typography sx={menuHeaderStyle}>{t('footer.contacts')}</Typography>
          <Typography sx={secondaryText}>{t('footer.address')}</Typography>
          <Typography sx={secondaryText}>+380 800 213 452</Typography>
          <Grid
            display={'flex'}
            flexDirection={'row'}
            gap={'20px'}
            sx={{
              paddingTop: '32px',
            }}
          >
            <MailIconWithBackground />
            <InstagramIconWithBackground />
            <FacebookIconWithBackground />
          </Grid>
        </Grid>
        <Grid>
          <Typography sx={menuHeaderStyle}>{t('footer.menu')}</Typography>
          {menuItems.map(({ name, path }) => {
            return (
              <Typography
                key={name}
                sx={menuItemStyle}
                onClick={() => {
                  navigate(path);
                }}
              >
                {name}
              </Typography>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
