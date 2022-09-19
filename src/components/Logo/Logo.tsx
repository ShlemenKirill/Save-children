import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Grid
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      gap={'5px'}
      sx={{
        cursor: 'pointer',
      }}
      onClick={() => {
        navigate('/', { replace: true });
      }}
    >
      <img src={'/images/logo.png'} alt={'logo'} />
      <Typography
        color={colors.violet}
        sx={{
          ...fonts.stixNormal24,
        }}
      >
        Збережи дитину
      </Typography>
    </Grid>
  );
};

export default Logo;
