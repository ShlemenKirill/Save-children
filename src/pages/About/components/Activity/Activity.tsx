import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { listStyle, listItemStyle, listItemTextStyle } from 'pages/About/styles';

const Activity = () => {
  return (
    <Grid
      id={'activity'}
      display={'grid'}
      gridTemplateColumns={'50% 50%'}
      sx={{
        paddingTop: '21px',
      }}
    >
      <Grid id={'activity-text'}>
        <Typography
          sx={{
            color: colors.matteBlack,
            ...fonts.montserratNormal16,
          }}
        >
          Діяльність благодійної громадської організації «Збережи дитину» спрямована на збереження
          життя дітей та підтримку матерів, які потрапили у складну життєву ситуацію та які
          приймають рішення народжувати, багатодітним матерям та дітям сиротам під час війни в
          Україні, а саме:
        </Typography>
        <List sx={listStyle}>
          <ListItem sx={{ ...listItemStyle }}>
            <Typography sx={listItemTextStyle}>
              Надання психологічної, продуктової, фінансової, юридичної допомоги соціально
              незахищеним вагітним жінкам, матерям та їх дітям
            </Typography>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <Typography sx={listItemTextStyle}>
              Відновлення існуючого та будівництво нового будинку- прихистку для матерів та їх дітей
              які постраждали під час війни, втратили житло, були вимушено евакуйовані
            </Typography>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <Typography sx={listItemTextStyle}>
              Створення мережі філіалів благодійної громадської організації «Збережи дитину» по всій
              Україні
            </Typography>
          </ListItem>
        </List>
        <Typography
          sx={{
            color: colors.matteBlack,
            ...fonts.montserratMedium24,
          }}
        >
          Фахівці Організації за час свого існування створили:
        </Typography>
        <List sx={listStyle}>
          <ListItem sx={listItemStyle}>
            <Typography sx={listItemTextStyle}>
              Безкоштовну гарячу лінію — для допомоги жінкам
            </Typography>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <Typography sx={listItemTextStyle}>Психологічну службу</Typography>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <Typography sx={listItemTextStyle}>Службу юридичної та соціальної допомоги</Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid
        id={'activity-collage'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end'
        }}
      >
        <Box component={'img'} alt={'collage'} src={'images/aboutUs/collage.png'} sx={{
          width: '540px',
          height: '523px'
        }}/>
      </Grid>
    </Grid>
  );
};

export default Activity;
