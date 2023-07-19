import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, MenuItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import ChevronDown from 'components/Icons/ChevronDown';
import StyledMenu from 'components/StyledMenu';
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
import { useNavigationHeaders } from 'core/hooks/useNavigationHeaders';

const Navigation = () => {
  const {
    NAVIGATION_ABOUT,
    NAVIGATION_CONTACTS,
    NAVIGATION_INFORMATION,
    NAVIGATION_OUR_PROJECTS,
    NAVIGATION_PARTNERS,
    NAVIGATION_REPORTS,
    NAVIGATION_VOLUNTEERS,
  } = useNavigationHeaders();
  const { t } = useTranslation();
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
          {NAVIGATION_ABOUT}
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
            {NAVIGATION_OUR_PROJECTS}
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
            {t('navigation.pregnantHelp')}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(PROJECTS_EVACUATION_HELP);
            }}
          >
            {t('navigation.evacuationHelp')}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(PROJECTS_LARGE_FAMILY_HELP);
            }}
          >
            {t('navigation.largeFamilyHelp')}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(PROJECTS_HART_HOUSE);
            }}
          >
            {t('navigation.hartHouse')}
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
            borderBottom: pathname.startsWith(INFORMATION)
              ? `1px solid ${colors.matteBlack}`
              : 'none',
          }}
        >
          <Typography
            color={colors.matteBlack}
            sx={{
              ...fonts.montserratMedium16,
            }}
          >
            {NAVIGATION_INFORMATION}
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
            {t('navigation.infoWar')}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(INFORMATION_CHILDREN_IN_STRESS);
            }}
          >
            {t('navigation.stressChild')}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(INFORMATION_MOTHER_SAVE_MY_LIFE);
            }}
          >
            {t('navigation.motherSaveMyLife')}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(INFORMATION_STOP_VIOLENCE);
            }}
          >
            {t('navigation.stopViolence')}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseProjectMenu();
              navigate(INFORMATION_SAVE_CHILDREN_BOOK);
            }}
          >
            {t('navigation.saveLife')}
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
          {NAVIGATION_REPORTS}
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
          {NAVIGATION_PARTNERS}
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
          {NAVIGATION_VOLUNTEERS}
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
          {NAVIGATION_CONTACTS}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Navigation;
