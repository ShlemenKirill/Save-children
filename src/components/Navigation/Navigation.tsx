import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import NavMenuSelect from 'components/NavMenuSelect';
import { NavigationMenuItems } from 'core/constants/common';
import {
  ABOUT_US,
  CONTACTS,
  INFORMATION,
  PARTNERS,
  PROJECTS,
  REPORTS,
  VOLUNTEERS,
} from 'core/constants/navigation';

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
      <Grid
        sx={{
          cursor: 'pointer',
          borderBottom: pathname === PROJECTS ? `1px solid ${colors.matteBlack}` : 'none',
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
        sx={{
          cursor: 'pointer',
          borderBottom: pathname === INFORMATION ? `1px solid ${colors.matteBlack}` : 'none',
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
