import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Divider, Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ButtonVariants, NavigationMenuItems } from 'core/constants/common';
import MailIcon from 'components/Icons/MailIcon';
import InstagramIcon from 'components/Icons/InstagramIcon';
import FacebookIcon from 'components/Icons/FacebookIcon';
import Logo from 'components/Logo';
import StyledButton from 'components/StyledButton';
import Navigation from 'components/Navigation';
import MenuContext from 'context/MenuContext';

const Header = () => {
  const navigate = useNavigate();
  const { setCurrentMenuItem } = useContext(MenuContext);
  return (
    <Grid
      display={'flex'}
      flexDirection={'column'}
      sx={{
        '@media (min-width: 1440px)': {
          padding: '15px 10%',
        },
        '@media (min-width: 1920px)': {
          padding: '15px 20%',
        },
        '@media (min-width: 2560px)': {
          padding: '15px 27%',
        },
        background: colors.mainBackground,
      }}
    >
      <Grid
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Grid
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          sx={{
            cursor: 'pointer',
          }}
          onClick={() => {
            navigate('/', { replace: true });
            setCurrentMenuItem(NavigationMenuItems.main);
          }}
        >
          <Logo />
          <Typography
            color={colors.violet}
            sx={{
              ...fonts.stixNormal24,
            }}
          >
            Збережи дитину
          </Typography>
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} gap={'60px'} >
          <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography
              color={colors.grey}
              sx={{
                ...fonts.montserratNormal14,
              }}
            >
              Безкоштовна гаряча линия
            </Typography>
            <Typography
              color={colors.matteBlack}
              sx={{
                ...fonts.montserratMedium16,
              }}
            >
              +380 800 213 452
            </Typography>
          </Grid>
          <Grid display={'flex'} flexDirection={'row'} gap={'25px'} alignItems={'center'}>
            <MailIcon />
            <InstagramIcon />
            <FacebookIcon />
          </Grid>
          <Grid display={'flex'} flexDirection={'row'}>
            <StyledButton buttonVariant={ButtonVariants.primary}>Потрібна допомога</StyledButton>
          </Grid>
        </Grid>
      </Grid>
      <Divider color={`${colors.violet}`} sx={{
        opacity: '0.3'
      }}/>
      <Navigation />
    </Grid>
  );
};

export default Header;
