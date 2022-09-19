import { Menu, MenuProps, styled } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))(() => ({
  '& .MuiPaper-root': {
    borderRadius: '5px',
    backgroundColor: colors.violetLight,
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      paddingBottom: '3px',
      paddingTop: '3px',
      ...fonts.montserratNormal16,
      '&: hover': {
        ...fonts.montserratSemibold16,
        backgroundColor: colors.violetLight,
      },
    },
  },
}));
export default StyledMenu;
