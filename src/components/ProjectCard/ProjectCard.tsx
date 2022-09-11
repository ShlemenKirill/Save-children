import { Box, Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import ChevronRight from 'components/Icons/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { IProjectCardProps } from 'types/propTypes';

const ProjectCard = ({ imageUrl, headerText, text, pathUrl }: IProjectCardProps) => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    navigate(pathUrl);
  };
  return (
    <Grid
      width={'34.18rem'}
      height={'37.125rem'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      sx={{
        padding: '2.8rem 2.8rem 2.375rem 2.8rem',
        background: colors.violetLight,
        boxShadow: '0px 6px 28px 5px rgba(234, 221, 244, 0.4)',
        borderRadius: '10px',
      }}
    >
      <Box component={'img'} alt={headerText} src={imageUrl} width={'28.4rem'} height={'20.6rem'} />
      <Grid
        display={'flex'}
        flexDirection={'column'}
        sx={{
          paddingTop: '38px',
        }}
      >
        <Grid>
          <Grid
            sx={{
              paddingBottom: '13px',
            }}
          >
            <Typography
              sx={{
                color: colors.matteBlack,
                ...fonts.montserratSemibold28,
              }}
            >
              {headerText}
            </Typography>
          </Grid>
          <Grid>
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
  );
};

export default ProjectCard;
