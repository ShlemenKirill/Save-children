import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ABOUT_US, PARTNERS, REPORTS, VOLUNTEERS } from 'core/constants/navigation';
import Logo from 'components/Logo';
import MailIconWithBackground from 'components/Icons/MailIconWithBackground';
import InstagramIconWithBackground from 'components/Icons/InstagramIconWithBackground';
import FacebookIconWithBackground from 'components/Icons/FacebookIconWithBackground';

const Footer = () => {
  const navigate = useNavigate();
  const secondaryText = {
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
        gap={'10%'}
        sx={{
          width: '1169px',
          paddingTop: '4.375rem',
          paddingBottom: '4.375rem',
          margin: 'auto',
          background: colors.footer,
        }}
      >
        <Grid display={'flex'} flexDirection={'row'} gap={'12px'} alignItems={'center'}>
          <Logo />
          <Typography
            sx={{
              color: colors.violet,
              ...fonts.stixNormal24,
            }}
          >
            Збережи дитину
          </Typography>
        </Grid>
        <Grid>
          <Typography sx={menuHeaderStyle}>Контакти</Typography>
          <Typography sx={secondaryText}>Kyiv, Ukraine</Typography>
          <Typography sx={secondaryText}>+380 800 213 452</Typography>
          <Grid
            display={'flex'}
            flexDirection={'row'}
            gap={'20px'}
            sx={{
              paddingTop: '22px',
            }}
          >
            <MailIconWithBackground />
            <InstagramIconWithBackground />
            <FacebookIconWithBackground />
          </Grid>
        </Grid>
        <Grid>
          <Typography sx={menuHeaderStyle}>Меню</Typography>
          <Typography
            sx={menuItemStyle}
            onClick={() => {
              navigate(ABOUT_US);
            }}
          >
            Про нас
          </Typography>
          <Typography
            sx={menuItemStyle}
            onClick={() => {
              navigate('/projects');
            }}
          >
            Нашi проекти
          </Typography>
          <Typography
            sx={menuItemStyle}
            onClick={() => {
              navigate(REPORTS);
            }}
          >
            Звітність
          </Typography>
          <Typography
            sx={menuItemStyle}
            onClick={() => {
              navigate(PARTNERS);
            }}
          >
            Партнерам
          </Typography>
          <Typography
            sx={menuItemStyle}
            onClick={() => {
              navigate(VOLUNTEERS);
            }}
          >
            Волонтерам
          </Typography>
          <Typography
            sx={menuItemStyle}
            onClick={() => {
              navigate('/information');
            }}
          >
            Iнформація
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
