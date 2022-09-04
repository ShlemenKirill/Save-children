import { fonts } from 'core/constants/fonts';
import { colors } from 'core/constants/colors';

export const listStyle = {
  listStyleType: 'disc',
  paddingLeft: '20px',
};
export const listItemStyle = {
  display: 'list-item',
  padding: '3px 10px',
};
export const listItemTextStyle = {
  ...fonts.montserratNormal16,
  color: colors.matteBlack,
};
