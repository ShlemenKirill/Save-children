import { useState } from 'react';
import { alpha, Button, Menu, MenuItem, MenuProps, styled } from '@mui/material';
import ChevronDown from 'components/Icons/ChevronDown';
import { fonts } from 'core/constants/fonts';
import { colors } from 'core/constants/colors';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '5px',
    background: colors.violetLight,
    minWidth: 180,
    color: colors.matteBlack,
    '& .MuiMenu-list': {
      padding: '15px 17px',
    },
    '& .MuiMenuItem-root': {
      padding: '1px 0',
      ...fonts.montserratMedium16,
      '&:hover': {
        background: 'transparent',
        ...fonts.montserratBold16,
        lineHeight: '25px',
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

export interface NavMenuSelectProps {
  name: string;
  menuItems: string[];
}

const NavMenuSelect = ({ name, menuItems }: NavMenuSelectProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id='demo-customized-button'
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        variant='text'
        disableElevation
        onClick={handleClick}
        endIcon={<ChevronDown />}
        sx={{
          color: colors.matteBlack,
          textTransform: 'none',
          ...fonts.montserratMedium16,
        }}
      >
        {name}
      </Button>
      <StyledMenu
        id='demo-customized-menu'
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((menuItem) => {
          return (
            <MenuItem key={menuItem} onClick={handleClose} disableRipple>
              {menuItem}
            </MenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
};

export default NavMenuSelect;
