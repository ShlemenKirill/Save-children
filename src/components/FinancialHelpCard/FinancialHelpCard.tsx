import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { IFinancialHelpCardProps } from 'types/propTypes';
import { useTranslation } from 'react-i18next';

const FinancialHelpCard = ({ destination }: IFinancialHelpCardProps) => {
  const { t } = useTranslation();
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
          {t('finHelpCard.forFinHelp')}
        </Typography>
        <Grid paddingTop={'7px'}>
          <Typography sx={credentialsTextStyle}>{t('finHelpCard.accountNumber')}</Typography>
          <Typography sx={credentialsTextStyle}>{t('finHelpCard.swiftCode')}</Typography>
          <Typography sx={credentialsTextStyle}>{t('finHelpCard.bankName')}</Typography>
          <Typography sx={credentialsTextStyle}>{t('finHelpCard.bankAddress')}</Typography>
          <Typography sx={credentialsTextStyle}>{t('finHelpCard.head')}</Typography>
          <Typography sx={credentialsTextStyle}>{t('finHelpCard.projectDesc')}</Typography>
          <Typography sx={credentialsTextStyle}>{t('finHelpCard.payPal')}</Typography>
        </Grid>
        <Typography paddingTop={'6px'} sx={credentialsTextStyle}>
          {t('finHelpCard.dest')} <Typography display={'inline'}>{destination}</Typography>{' '}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FinancialHelpCard;
