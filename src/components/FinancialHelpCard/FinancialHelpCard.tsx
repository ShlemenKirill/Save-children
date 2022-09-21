import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { IFinancialHelpCardProps } from 'types/propTypes';

const FinancialHelpCard = ({ destination }: IFinancialHelpCardProps) => {
  const credentialsTextStyle = {
    ...fonts.montserratNormal16,
    color: colors.matteBlack,
  };
  return (
    <Grid
      sx={{
        background: colors.violetLight,
        width: 'max-content',
        borderRadius: '5px',
      }}
    >
      <Grid padding={'14px 20px'}>
        <Typography
          sx={{
            ...fonts.montserratSemibold16,
            color: colors.matteBlack,
          }}
        >
          Для фінансової допомоги
        </Typography>
        <Grid paddingTop={'7px'}>
          <Typography sx={credentialsTextStyle}>Приватбанк 5168 7574 0663 0931</Typography>
          <Typography sx={credentialsTextStyle}>Голова ГО Трухан Наталія</Typography>
          <Typography sx={credentialsTextStyle}>
            Збережи дитини благодійний проект у підтримку вагітності
          </Typography>
        </Grid>
        <Typography paddingTop={'6px'} sx={credentialsTextStyle}>
          ПРИЗНАЧЕННЯ: <Typography display={'inline'}>{destination}</Typography>{' '}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FinancialHelpCard;
