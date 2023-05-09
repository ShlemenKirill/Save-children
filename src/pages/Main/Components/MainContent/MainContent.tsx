import { Grid, Link, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ButtonVariants, VOLUNTEERS_LINK } from 'core/constants/common';
import StyledButton from 'components/StyledButton';
import { useTranslation } from 'react-i18next';

const MainContent = () => {
  const {t} = useTranslation();
  return (
    <Grid
      sx={{
        backgroundColor: colors.mainBackground,
        backgroundImage: 'url(/images/mainBackground.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Grid
        display={'flex'}
        flexDirection={'row'}
        sx={{
          width: '1169px',
          paddingTop: '5.1rem',
          paddingBottom: '5.8rem',
          margin: 'auto',
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
                {t('mainPage.mainContent.t1')}

              </Typography>
              <Typography
                color={colors.violet}
                sx={{
                  ...fonts.stixSemibold90,
                }}
              >{t('mainPage.mainContent.t2')}

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
              >{t('mainPage.mainContent.t3')}

              </Typography>
              <Typography
                color={colors.mainText}
                sx={{
                  ...fonts.montserratNormal24,
                }}
              >{t('mainPage.mainContent.t4')}

              </Typography>
            </Grid>
            <Grid
              sx={{
                paddingTop: '3.75rem',
              }}
            >
              <Link
                href={VOLUNTEERS_LINK}
                target={'_blank'}
                rel={'noreferrer'}
                sx={{
                  textDecoration: 'none',
                }}
              >
                <StyledButton buttonVariant={ButtonVariants.primaryGreen}>
                  <Typography
                    color={colors.white}
                    sx={{
                      ...fonts.montserratBold16,
                    }}
                  >{t('mainPage.mainContent.t5')}

                  </Typography>
                </StyledButton>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainContent;
