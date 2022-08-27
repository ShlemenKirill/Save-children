import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ButtonVariants } from 'core/constants/common';
import MailIcon from 'components/Icons/MailIcon';
import InstagramIcon from 'components/Icons/InstagramIcon';
import FacebookIcon from 'components/Icons/FacebookIcon';
import Logo from 'components/Logo';
import StyledButton from 'components/StyledButton';

const Header = () => {
  return (
    <Grid
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      sx={{
        background:
          'linear-gradient(180deg, rgba(211, 231, 180, 0.3) 41.67%, rgba(218, 232, 196, 0) 117.37%)',
      }}
    >
      <Grid display={'flex'} flexDirection={'row'} alignItems={'center'}>
        <Grid
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          sx={{
            paddingRight: '7rem',
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
        <Grid
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          sx={{
            paddingRight: '2rem',
          }}
        >
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
        <Grid
          display={'flex'}
          flexDirection={'row'}
          gap={'19px'}
          sx={{
            paddingRight: '2.375rem',
          }}
        >
          <MailIcon />
          <InstagramIcon />
          <FacebookIcon />
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} gap={'30px'}>
          <StyledButton buttonVariant={ButtonVariants.primary}>Хочу допомогти</StyledButton>
          <StyledButton buttonVariant={ButtonVariants.secondary}>Потрібна допомога</StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
