import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { alpha, Button, Menu, MenuItem, MenuProps, styled } from '@mui/material';
import ChevronDown from 'components/Icons/ChevronDown';
import { fonts } from 'core/constants/fonts';
import { colors } from 'core/constants/colors';
import {
  PROJECTS_EVACUATION_HELP,
  PROJECTS_HART_HOUSE,
  PROJECTS_LARGE_FAMILY_HELP,
  PROJECTS_PREGNANT_HELP,
} from 'core/constants/navigation';

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
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (menuItem: string) => {
    switch (menuItem) {
      case 'Допомога кризовим вагітним':
        navigate(PROJECTS_PREGNANT_HELP);
        break;
      case 'Допомога в евакуацii':
        navigate(PROJECTS_EVACUATION_HELP);
        break;
      case 'Допомога багатодітним сімям':
        navigate(PROJECTS_LARGE_FAMILY_HELP);
        break;
      case 'Дiм турботы СЕРДЕНЬКО':
        navigate(PROJECTS_HART_HOUSE);
        break;
    }
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
        onClose={() => setAnchorEl(null)}
      >
        {menuItems.map((menuItem) => {
          return (
            <MenuItem key={menuItem} onClick={() => handleMenuItemClick(menuItem)} disableRipple>
              {menuItem}
            </MenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
};

export default NavMenuSelect;
