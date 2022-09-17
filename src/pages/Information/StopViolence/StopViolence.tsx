import { Box, Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import PageContainer from 'containers/PageContainer';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { INFORMATION } from 'core/constants/navigation';

const StopViolence = () => {
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  return (
    <Grid
      sx={{
        backgroundColor: colors.mainBackground,
      }}
    >
      <PageContainer>
        <>
          <Breadcrumbs>
            <Link href={INFORMATION} underline='hover'>
              <Typography
                sx={{
                  color: colors.matteBlack,
                  opacity: '0.7',
                  ...fonts.montserratNormal14,
                }}
              >
                Iнформація
              </Typography>
            </Link>
            <Typography
              sx={{
                color: colors.matteBlack,
                ...fonts.montserratNormal14,
              }}
            >
              Брошура «Скажи СТОП насиллю»
            </Typography>
          </Breadcrumbs>
          <Grid
            sx={{
              paddingTop: '24px',
            }}
          >
            <Typography
              sx={{
                color: colors.matteBlack,
                ...fonts.montserratSemibold50,
              }}
            >
              Брошура «Скажи СТОП насиллю»
            </Typography>
          </Grid>
          <Grid>
            <Typography sx={normalTextStyle} paddingTop={'21px'}>
              Брошура пiдготована з метою попередження насильства над жiнками, пiдтримки кризових
              вагiтних якi перебуваютъ у скдаданих життєвих обставинах. За статистикою близько 90%
              випадкiв звернення щодо насильства в сiм’i надходить вiд жiнок.
              <Link
                download={'Stop Violence broshure'}
                href={'/documents/stop_violence.pdf'}
                sx={{
                  color: colors.violet,
                  ...fonts.montserratNormal16,
                }}
              >
                Скачати
              </Link>
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
            <Box
              component={'img'}
              alt={'stopViolence'}
              src={'/images/information/stopViolence3.png'}
              width={'1170px'}
              height={'837px'}
            />
            <Box
              component={'img'}
              alt={'stopViolence'}
              src={'/images/information/stopViolence4.png'}
              width={'1170px'}
              height={'837px'}
            />
            <Box
              component={'img'}
              alt={'stopViolence'}
              src={'/images/information/stopViolence5.png'}
              width={'1170px'}
              height={'837px'}
            />
            <Box
              component={'img'}
              alt={'stopViolence'}
              src={'/images/information/stopViolence6.png'}
              width={'1170px'}
              height={'837px'}
            />
            <Box
              component={'img'}
              alt={'stopViolence'}
              src={'/images/information/stopViolence7.png'}
              width={'1170px'}
              height={'837px'}
            />
            <Box
              component={'img'}
              alt={'stopViolence'}
              src={'/images/information/stopViolence8.png'}
              width={'1170px'}
              height={'837px'}
            />
            <Box
              component={'img'}
              alt={'stopViolence'}
              src={'/images/information/stopViolence9.png'}
              width={'1170px'}
              height={'837px'}
            />
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default StopViolence;
