import { Box, Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { IProjectCardProps } from 'types/propTypes';
import { fonts } from 'core/constants/fonts';
import ChevronRight from 'components/Icons/ChevronRight';
import { useNavigate } from 'react-router-dom';

const InfoCard = ({ imageUrl, headerText, text, pathUrl }: IProjectCardProps) => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    navigate(pathUrl);
  };
  return (
    <Grid
      sx={{
        width: '100%',
        background: colors.violetLight,
        boxShadow: '0px 6px 28px 5px rgba(234, 221, 244, 0.4)',
        borderRadius: '10px',
        padding: '35px',
      }}
    >
      <Grid display={'flex'} flexDirection={'row'}>
        <Grid>
          <Box component={'img'} alt={headerText} src={imageUrl} width={'310px'} height={'185px'} />
        </Grid>
        <Grid
          sx={{
            paddingLeft: '35px',
            width: '100%',
          }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Grid>
            <Grid>
              <Typography
                sx={{
                  color: colors.matteBlack,
                  ...fonts.montserratSemibold32,
                }}
              >
                {headerText}
              </Typography>
            </Grid>
            <Grid
              sx={{
                paddingTop: '17px',
              }}
            >
              <Typography
                sx={{
                  color: colors.matteBlack,
                  ...fonts.montserratNormal16,
                }}
              >
                {text}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'flex-end'}
            alignItems={'center'}
          >
            <Typography
              onClick={handleLinkClick}
              sx={{
                color: colors.matteBlack,
                ...fonts.montserratNormal16,
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                },
              }}
            >
              Докладно
            </Typography>
            <Grid
              sx={{
                paddingLeft: '0.5rem',
              }}
            >
              <ChevronRight />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoCard;
