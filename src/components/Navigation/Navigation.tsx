import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, MenuItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import ChevronDown from 'components/Icons/ChevronDown';
import StyledMenu from 'components/StyledMenu';
import { NavigationMenuItems } from 'core/constants/common';
import {
  ABOUT_US,
  CONTACTS,
  INFORMATION,
  INFORMATION_CHILDREN_IN_STRESS,
  INFORMATION_MOTHER_SAVE_MY_LIFE,
  INFORMATION_SAVE_CHILDREN_BOOK,
  INFORMATION_STOP_VIOLENCE,
  INFORMATION_WAR,
  PARTNERS,
  PROJECTS,
  PROJECTS_EVACUATION_HELP,
  PROJECTS_HART_HOUSE,
  PROJECTS_LARGE_FAMILY_HELP,
  PROJECTS_PREGNANT_HELP,
  REPORTS,
  VOLUNTEERS,
} from 'core/constants/navigation';

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [projectsMenu, setProjectsMenu] = React.useState<null | HTMLElement>(null);
  const [informationMenu, setInformationMenu] = React.useState<null | HTMLElement>(null);
  const openProjectsMenu = Boolean(projectsMenu);
  const openInformationMenu = Boolean(informationMenu);
  const handleClickProjectMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setProjectsMenu(event.currentTarget);
  };
  const handleCloseProjectMenu = () => {
    setProjectsMenu(null);
  };
  const handleClickInformationMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setInformationMenu(event.currentTarget);
  };
  const handleCloseInformationMenu = () => {
    setInformationMenu(null);
  };
  return (
    <Grid
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{
        paddingTop: '5px',
      }}
    >
      <Grid
        onClick={() => {
          navigate(ABOUT_US, { replace: true });
        }}
        sx={{
          cursor: 'pointer',
          borderBottom: pathname === ABOUT_US ? `1px solid ${colors.matteBlack}` : 'none',
        }}
      >
        <Typography
          color={colors.matteBlack}
          sx={{
            ...fonts.montserratMedium16,
          }}
        >
          {NavigationMenuItems.aboutUs}
        </Typography>
      </Grid>
      <Grid>
        <Grid
          display={'flex'}
          flexDirection={'row'}
          onClick={() => {
            navigate(PROJECTS, { replace: true });
          }}
          sx={{
            cursor: 'pointer',
            borderBottom: pathname.startsWith(PROJECTS) ? `1px solid ${colors.matteBlack}` : 'none',
          }}
        >
          <Typography
            color={colors.matteBlack}
            sx={{
              ...fonts.montserratMedium16,
            }}
          >
            {NavigationMenuItems.ourProjects}
          </Typography>
          <Grid
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            paddingLeft={'7px'}
            onClick={(event) => {
              event.stopPropagation();
              handleClickProjectMenu(event);
            }}
          >
            <ChevronDown />
          </Grid>
        </Grid>
        <StyledMenu
          id='projects-menu'
          anchorEl={projectsMenu}
          open={openProjectsMenu}
          onClose={handleCloseProjectMenu}
        >
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(PROJECTS_PREGNANT_HELP);
            }}
          >
            Допомога кризовим вагітним
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(PROJECTS_EVACUATION_HELP);
            }}
          >
            Допомога в евакуацii
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(PROJECTS_LARGE_FAMILY_HELP);
            }}
          >
            Допомога багатодітним сімям
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(PROJECTS_HART_HOUSE);
            }}
          >
            Дiм турботы СЕРДЕНЬКО
          </MenuItem>
        </StyledMenu>
      </Grid>
      <Grid>
        <Grid
          display={'flex'}
          flexDirection={'row'}
          onClick={() => {
            navigate(INFORMATION, { replace: true });
          }}
          sx={{
            cursor: 'pointer',
            borderBottom: pathname === INFORMATION ? `1px solid ${colors.matteBlack}` : 'none',
          }}
        >
          <Typography
            color={colors.matteBlack}
            sx={{
              ...fonts.montserratMedium16,
            }}
          >
            {NavigationMenuItems.information}
          </Typography>
          <Grid
            paddingLeft={'7px'}
            onClick={(event) => {
              event.stopPropagation();
              handleClickInformationMenu(event);
            }}
          >
            <ChevronDown />
          </Grid>
        </Grid>

        <StyledMenu
          id='information-menu'
          anchorEl={informationMenu}
          open={openInformationMenu}
          onClose={handleCloseInformationMenu}
        >
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(INFORMATION_WAR);
            }}
          >
            Як ми працюємо під час війни
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(INFORMATION_CHILDREN_IN_STRESS);
            }}
          >
            «Допоможiть, моя дитина в стресi»
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(INFORMATION_MOTHER_SAVE_MY_LIFE);
            }}
          >
            Брошура «Матусю, збережи менi життя!»
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(INFORMATION_STOP_VIOLENCE);
            }}
          >
            Брошура «Скажи СТОП насиллю»
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(INFORMATION_SAVE_CHILDREN_BOOK);
            }}
          >
            Книга «Збереженнi життя»
          </MenuItem>
        </StyledMenu>
      </Grid>
      <Grid
        onClick={() => {
          navigate(REPORTS, { replace: true });
        }}
        sx={{
          cursor: 'pointer',
          borderBottom: pathname === REPORTS ? `1px solid ${colors.matteBlack}` : 'none',
        }}
      >
        <Typography
          color={colors.matteBlack}
          sx={{
            ...fonts.montserratMedium16,
          }}
        >
          {NavigationMenuItems.reports}
        </Typography>
      </Grid>
      <Grid
        onClick={() => {
          navigate(PARTNERS, { replace: true });
        }}
        sx={{
          cursor: 'pointer',
          borderBottom: pathname === PARTNERS ? `1px solid ${colors.matteBlack}` : 'none',
        }}
      >
        <Typography
          color={colors.matteBlack}
          sx={{
            ...fonts.montserratMedium16,
          }}
        >
          {NavigationMenuItems.partners}
        </Typography>
      </Grid>
      <Grid
        onClick={() => {
          navigate(VOLUNTEERS, { replace: true });
        }}
        sx={{
          cursor: 'pointer',
          borderBottom: pathname === VOLUNTEERS ? `1px solid ${colors.matteBlack}` : 'none',
        }}
      >
        <Typography
          color={colors.matteBlack}
          sx={{
            ...fonts.montserratMedium16,
          }}
        >
          {NavigationMenuItems.volunteers}
        </Typography>
      </Grid>
      <Grid
        onClick={() => {
          navigate(CONTACTS, { replace: true });
        }}
        sx={{
          cursor: 'pointer',
          borderBottom: pathname === CONTACTS ? `1px solid ${colors.matteBlack}` : 'none',
        }}
      >
        <Typography
          color={colors.matteBlack}
          sx={{
            ...fonts.montserratMedium16,
          }}
        >
          {NavigationMenuItems.contacts}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Navigation;
