import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import ChevronRight from 'components/Icons/ChevronRight';
import { IDetailedLinkProps } from 'types/propTypes';

const DetailedLink = ({ handler }: IDetailedLinkProps) => {
  return (
    <Grid display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'}>
      <Typography
        onClick={handler}
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
  );
};

export default DetailedLink;
