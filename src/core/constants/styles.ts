import { fonts } from './fonts';
import { colors } from './colors';

export const imageStyle = {
  boxShadow: '0px 3px 31px 2px rgba(100, 44, 141, 0.12)',
};

export const linkStyle = {
  ...fonts.montserratMedium16,
  color: colors.violet,
  textDecorationColor: colors.violet,

  textUnderlineOffset: '4px',
  '&:hover': {
    ...fonts.montserratSemibold16,
  },
};
