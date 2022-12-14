import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ContainerTypes } from 'core/constants/common';
import DetailedInformationPageContainer from 'containers/DetailedInformationPageContainer';

const LargeFamilyHelp = () => {
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const listItemStyle = {
    ...normalTextStyle,
    display: 'list-item',
    padding: 0,
  };
  const normalTextStyleBold = {
    color: colors.matteBlack,
    ...fonts.montserratBold16,
  };
  return (
    <DetailedInformationPageContainer
      name={'Допомога багатодітним сім\'ям'}
      containerType={ContainerTypes.projects}
    >
      <>
        <Grid paddingTop={'17px'}>
          <Typography sx={normalTextStyle}>
            Щодня команда ГО «ЗБЕРЕЖИ ДИТИНУ» робить добрі справи. Особливо ми любимо працювати з
            багатодітними родинами, бо діти це благословіння. Ми допомагаємо: самотнім матусям,
            багатодітним родинам, родинам що виховують дітей з інвалідністю, кризовим вагітним.
          </Typography>
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} gap={'120px'} paddingTop={'17px'}>
          <Box
            component={'img'}
            width={'400px'}
            height={'290px'}
            alt={'large_family1'}
            src={'/images/projects/large_family1.png'}
          />
          <Grid>
            <List sx={{ listStyleType: 'decimal', padding: 0 }}>
              <ListItem sx={listItemStyle}>
                <Typography sx={normalTextStyle}>
                  Для оформлення допомоги вам потрібно звернутись на вайбер номер голови ГО Трухан
                  Наталії{' '}
                  <Typography sx={normalTextStyleBold} display={'inline'}>
                    0504453445
                  </Typography>
                  .
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
                  Подати прохання на отримання допомоги, чітко прописав основні потреби.
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
                  Для встановлення вашої особи, підтвердження відповідності вашого запиту до
                  статутної діяльності ГО «ЗБЕРЕЖИ ДИТИНУ», нам необхідна наступна інформація:
                  <List sx={{ listStyleType: 'disc', padding: '0 0 0 20px' }}>
                    <ListItem sx={listItemStyle}>
                      <Typography sx={normalTextStyle}>
                        фото вашого паспорту, ідентифікаційного коду
                      </Typography>
                    </ListItem>
                    <ListItem sx={listItemStyle}>
                      <Typography sx={normalTextStyle}>
                        фсвідоцтва про народження дитини/дітей
                      </Typography>
                    </ListItem>
                    <ListItem sx={listItemStyle}>
                      <Typography sx={normalTextStyle}>фото вашої сім‘ї</Typography>
                    </ListItem>
                    <ListItem sx={listItemStyle}>
                      <Typography sx={normalTextStyle}>короткий опис вашої ситуації</Typography>
                    </ListItem>
                  </List>
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
                  Анкета буде оброблена співробітниками ГО на протязі 5 днів.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...listItemStyle, paddingTop: '10px' }}>
                <Typography sx={normalTextStyle}>
                  За необхідності ми з вами зв’яжемся для додаткових уточнень.
                </Typography>
              </ListItem>
              <ListItem sx={listItemStyle}>
                <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
                  Надсилаючи це звернення, ви даєте згоду на обробку, зберігання і використання
                  конфіденційної інформації, наведеної у зверненні, зокрема на надання цієї
                  інформації експертам ГО для отримання їх експертної думки.
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} gap={'30px'} paddingTop={'40px'}>
          <Box component={'img'} alt={'large_family1'} src={'/images/projects/large_family2.png'} />
          <Box component={'img'} alt={'large_family1'} src={'/images/projects/large_family3.png'} />
          <Box component={'img'} alt={'large_family1'} src={'/images/projects/large_family4.png'} />
        </Grid>
      </>
    </DetailedInformationPageContainer>
  );
};

export default LargeFamilyHelp;
