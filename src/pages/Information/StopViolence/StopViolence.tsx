import { Box, Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ContainerTypes } from 'core/constants/common';
import DownloadLink from 'components/DownloadLink';
import DetailedInformationPageContainer from 'containers/DetailedInformationPageContainer/DetailedInformationPageContainer';

const StopViolence = () => {
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const pathToImages = [
    '/images/information/stopViolence3.png',
    '/images/information/stopViolence4.png',
    '/images/information/stopViolence5.png',
    '/images/information/stopViolence6.png',
    '/images/information/stopViolence7.png',
    '/images/information/stopViolence8.png',
    '/images/information/stopViolence9.png',
  ];
  return (
    <DetailedInformationPageContainer
      name={'Брошура «Скажи СТОП насиллю»'}
      containerType={ContainerTypes.information}
    >
      <>
        <Grid>
          <Typography sx={normalTextStyle} paddingTop={'21px'}>
            Брошура пiдготована з метою попередження насильства над жiнками, пiдтримки кризових
            вагiтних якi перебуваютъ у скдаданих життєвих обставинах. За статистикою близько 90%
            випадкiв звернення щодо насильства в сiм’i надходить вiд жiнок.
            <DownloadLink
              fileName={'Stop Violence broshure'}
              src={'/documents/stop_violence.pdf'}
            />
          </Typography>
        </Grid>
        <Grid display={'flex'} flexDirection={'column'} gap={'50px'} paddingTop={'31px'}>
          <Grid display={'flex'} flexDirection={'row'} gap={'50px'}>
            <Box
              component={'img'}
              alt={'stopViolence'}
              src={'/images/information/stopViolence1.png'}
              width={'560px'}
              height={'787px'}
            />
            <Box
              component={'img'}
              alt={'stopViolence'}
              src={'/images/information/stopViolence2.png'}
              width={'560px'}
              height={'787px'}
            />
          </Grid>
          {pathToImages.map((path) => {
            return (
              <Box
                key={path}
                component={'img'}
                alt={'stopViolence'}
                src={path}
                width={'1170px'}
                height={'837px'}
              />
            );
          })}
        </Grid>
      </>
    </DetailedInformationPageContainer>
  );
};

export default StopViolence;
