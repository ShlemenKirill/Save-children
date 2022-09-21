import { Box, Grid, Typography } from '@mui/material';
import DetailedInformationPageContainer from 'containers/DetailedInformationPageContainer';
import { ContainerTypes } from 'core/constants/common';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { text } from './text';

const WorkAtWar = () => {
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const numbersStyle = {
    color: colors.violet,
    ...fonts.montserratSemibold40,
  };
  return (
    <DetailedInformationPageContainer
      name={'Як ми працюємо під час війни'}
      containerType={ContainerTypes.information}
    >
      <>
        <Typography sx={normalTextStyle} paddingTop={'30px'}>
          Наші основні задачі, та майже щоденні справи:
        </Typography>
        <Grid display={'flex'} flexDirection={'row'}>
          <Grid>
            {text.map((element, index) => {
              return (
                <Grid
                  key={index}
                  display={'grid'}
                  gridTemplateColumns={'60px auto'}
                  paddingTop={'15px'}
                >
                  <Typography sx={numbersStyle}>{index + 1}</Typography>
                  <Typography sx={normalTextStyle} width={'556px'}>
                    {element}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
          <Box
            paddingLeft={'45px'}
            paddingTop={'15px'}
            component={'img'}
            alt={'work_at_war'}
            src={'/images/information/work_at_war.png'}
            height={'836px'}
            width={'498px'}
          />
        </Grid>
      </>
    </DetailedInformationPageContainer>
  );
};

export default WorkAtWar;
