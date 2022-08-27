import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import NavMenuSelect from 'components/NavMenuSelect';
import { NavigationMenuItems } from 'core/constants/common';
import { ABOUT_US, CONTACTS, PARTNERS, REPORTS, VOLUNTEERS } from 'core/constants/navigation';
import MenuContext from 'context/MenuContext';

const Navigation = () => {
  const navigate = useNavigate();
  const { currentMenuItem, setCurrentMenuItem } = useContext(MenuContext);
  const panelOnClickHandler = (panelName: NavigationMenuItems) => {
    setCurrentMenuItem(panelName);
  };
  return (
    <Grid
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'5.125rem'}
    >
      <Grid
        onClick={() => {
          panelOnClickHandler(NavigationMenuItems.aboutUs);
          navigate(ABOUT_US, { replace: true });
        }}
        sx={{
          cursor: 'pointer',
          borderBottom:
            currentMenuItem === NavigationMenuItems.aboutUs
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
          {NavigationMenuItems.aboutUs}
        </Typography>
      </Grid>
      <Grid
        onClick={() => {
          panelOnClickHandler(NavigationMenuItems.ourProjects);
        }}
        sx={{
          cursor: 'pointer',
          borderBottom:
            currentMenuItem === NavigationMenuItems.ourProjects
              ? `1px solid ${colors.matteBlack}`
              : 'none',
        }}
      >
        <NavMenuSelect
          name={NavigationMenuItems.ourProjects}
          menuItems={[
            'Допомога кризовим вагітним',
            'Допомога в евакуацii',
            'Допомога багатодітним сімям',
            'Дiм турботы СЕРДЕНЬКО',
          ]}
        />
      </Grid>
      <Grid
        onClick={() => panelOnClickHandler(NavigationMenuItems.information)}
        sx={{
          cursor: 'pointer',
          borderBottom:
            currentMenuItem === NavigationMenuItems.information
              ? `1px solid ${colors.matteBlack}`
              : 'none',
        }}
      >
        <NavMenuSelect
          name={NavigationMenuItems.information}
          menuItems={[
            'Як ми працюємо під час війни',
            ' «Допоможiть, моя дитина в стресi»',
            'Брошура «Матусю, збережи менi життя!»',
            'Брошура «Скажи СТОП насиллю»',
            'Книга «Збереженнi життя»',
          ]}
        />
      </Grid>
      <Grid
        onClick={() => {
          panelOnClickHandler(NavigationMenuItems.reports);
          navigate(REPORTS, { replace: true });
        }}
        sx={{
          cursor: 'pointer',
          borderBottom:
            currentMenuItem === NavigationMenuItems.reports
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
          {NavigationMenuItems.reports}
        </Typography>
      </Grid>
      <Grid
        onClick={() => {
          panelOnClickHandler(NavigationMenuItems.partners);
          navigate(PARTNERS, { replace: true });
        }}
        sx={{
          cursor: 'pointer',
          borderBottom:
            currentMenuItem === NavigationMenuItems.partners
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
          {NavigationMenuItems.partners}
        </Typography>
      </Grid>
      <Grid
        onClick={() => {
          panelOnClickHandler(NavigationMenuItems.volunteers);
          navigate(VOLUNTEERS, { replace: true });
        }}
        sx={{
          cursor: 'pointer',
          borderBottom:
            currentMenuItem === NavigationMenuItems.volunteers
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
          {NavigationMenuItems.volunteers}
        </Typography>
      </Grid>
      <Grid
        onClick={() => {
          panelOnClickHandler(NavigationMenuItems.contacts);
          navigate(CONTACTS, { replace: true });
        }}
        sx={{
          cursor: 'pointer',
          borderBottom:
            currentMenuItem === NavigationMenuItems.contacts
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
          {NavigationMenuItems.contacts}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Navigation;
