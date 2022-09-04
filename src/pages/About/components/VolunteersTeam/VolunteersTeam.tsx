import { Box, Grid, Typography } from '@mui/material';
import { fonts } from 'core/constants/fonts';
import { colors } from 'core/constants/colors';
import { listItemTextStyle } from 'pages/About/styles';

const VolunteersTeam = () => {
  return (
    <Grid
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        paddingTop: '50px',
      }}
    >
      <Grid
        sx={{
          paddingTop: '10px',
        }}
      >
        <Typography
          sx={{
            ...fonts.montserratMedium24,
            color: colors.matteBlack,
          }}
        >
          «Збережи дитину» це потужна команда волонтерiв.
        </Typography>
        <Typography
          sx={{
            ...listItemTextStyle,
            paddingTop: '16px',
          }}
        >
          Десятки проведених освітніх заходів, ми випустили біля 10000 тисяч брошур які щодня
          зберігають життя дітям та жінкам.
        </Typography>
        <Typography
          sx={{
            ...listItemTextStyle,
            paddingTop: '10px',
          }}
        >
          Майже за 4 оки праці збережено більше ніж 200 дітей в утробі матерів.
        </Typography>
        <Typography
          sx={{
            ...listItemTextStyle,
            paddingTop: '10px',
          }}
        >
          Кожній мамі потрібна сильна опора, нажаль стається так, що обставини вирішують замість
          нас.
        </Typography>
        <Typography
          sx={{
            ...listItemTextStyle,
            paddingTop: '10px',
          }}
        >
          Щоб зупинити цей соціальний колапс МИ «Збережи дитину» об’єднались не тільки щоб врятувати
          майбутнє життя, але й для того, щоб не дати існуючим життям загубитися у цьому світі.
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          component={'img'}
          alt={'save-children-team'}
          src={'images/aboutUs/photoWithHashtag.png'}
          sx={{
            borderRadius: '5px',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default VolunteersTeam;
