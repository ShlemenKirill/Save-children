import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ButtonVariants } from 'core/constants/common';
import StyledButton from 'components/StyledButton';

const MainContent = () => {
  return (
    <Grid
      display={'flex'}
      flexDirection={'row'}
      sx={{
        backgroundColor: colors.mainBackground,
        backgroundImage: 'url(/images/mainBackground.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        '@media (min-width: 1440px)': {
          padding: '5.1rem 0 5.8rem 10%',
        },
        '@media (min-width: 1920px)': {
          padding: '5.1rem 0 5.8rem 20%',
        },
        '@media (min-width: 2560px)': {
          padding: '5.1rem 0 5.8rem 27%',
        },
      }}
    >
      <Grid
        display={'flex'}
        flexDirection={'row'}
        sx={{
          backgroundColor: colors.mainBackground,
        }}
      >
        <Grid
          display={'flex'}
          flexDirection={'column'}
          sx={{
            paddingBottom: '12.5rem',
          }}
        >
          <Grid>
            <Typography
              color={colors.violet}
              sx={{
                ...fonts.stixSemibold90,
              }}
            >
              Збережи
            </Typography>
            <Typography
              color={colors.violet}
              sx={{
                ...fonts.stixSemibold90,
              }}
            >
              дитину
            </Typography>
          </Grid>
          <Grid
            sx={{
              paddingTop: '1.1rem',
            }}
          >
            <Typography
              color={colors.mainText}
              sx={{
                ...fonts.montserratNormal24,
              }}
            >
              Благодійний проект
            </Typography>
            <Typography
              color={colors.mainText}
              sx={{
                ...fonts.montserratNormal24,
              }}
            >
              у підтримку вагітності.
            </Typography>
          </Grid>
          <Grid
            sx={{
              paddingTop: '3.75rem',
            }}
          >
            <StyledButton buttonVariant={ButtonVariants.primaryGreen}>
              <Typography
                color={colors.white}
                sx={{
                  ...fonts.montserratBold16,
                }}
              >
                Приєднатися
              </Typography>
            </StyledButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainContent;
