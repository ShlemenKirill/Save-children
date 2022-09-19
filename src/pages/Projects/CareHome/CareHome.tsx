import { Box, Grid, Link, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ContainerTypes } from 'core/constants/common';
import PDFIcon from 'components/Icons/PDFIcon';
import DetailedInformationPageContainer from 'containers/DetailedInformationPageContainer';

const CareHome = () => {
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  return (
    <DetailedInformationPageContainer
      name={'Дiм турботы "СЕРДЕНЬКО"'}
      containerType={ContainerTypes.projects}
    >
      <>
        <Grid paddingTop={'17px'}>
          <Typography sx={normalTextStyle}>
            Будинок турботи «СЕРДЕНЬКО❤», це не гуртожиток для переселенців. У нього зовсім інші
            задачі, вони більші та глибші. Основна задача це інформаційна, психологічна та юридична
            ПІДТРИМКА кризових вагітних, жінок із дітьми, сиріт -вимушено евакуйованих із горячих
            точок. Ми співпрацюємо з місцевими волонтерами, ЦНАП, пологовими будинками.
          </Typography>
        </Grid>
        <Grid paddingTop={'25px'} display={'flex'} flexDirection={'row'} gap={'40px'}>
          <Grid>
            <Box
              component={'img'}
              alt={'care_home1'}
              src={'/images/projects/careHome1.png'}
              width={'445px'}
              height={'322px'}
              sx={{
                filter: 'drop-shadow(0px 3px 34px rgba(239, 243, 231, 0.8))',
              }}
            />
          </Grid>
          <Grid>
            <Typography sx={normalTextStyle}>
              В «СЕРДЕНЬКО❤» чотири кімнати для тимчасового проживання матусь із дітками, але це
              ТИМЧАСОВЕ проживання. Звернувшись до «СЕРДЕНЬКО ❤», вимушені переселенці зможуть
              отримати :
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              1. Чіткий опис своїх прав та можливостей які надає держава ( виплата коштів, як
              оформити, отримати, оформлення в ЦНАП як внутрішньо переміщенного, можливості
              переїхати з перевіренними волонтерами закордон по офіційним программам при бажанні
              отримання статусу біженця закордоном)
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              2. Консультація і допомога при бажанні повернутись додому мамі із дітками.
            </Typography>

            <Box
              paddingTop={'27px'}
              component={'img'}
              alt={'care_home1'}
              src={'/images/projects/careHome2.png'}
              width={'685px'}
              height={'451px'}
            />

            <Typography sx={{ ...normalTextStyle, paddingTop: '27px' }}>
              3. Безкоштовні психологічні консультації для жінок та дітей ( внутрішньо переміщених
              осіб).
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              4. Безкоштовні юридичні консультації для жінок та дітей ( внутрішньо переміщених
              осіб).
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              5. Отримання гуманітарної допомоги при її наявності ( речі, продукти, гігієна, ліки).
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              6. Безкоштовні майстер-класи для діток та жінок.
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              7. Співпраця з лікарями. Особливо при роботі з постраждалими від насилля на окупованих
              територіях
            </Typography>

            <Box
              paddingTop={'27px'}
              component={'img'}
              alt={'care_home1'}
              src={'/images/projects/careHome3.png'}
              width={'685px'}
              height={'474px'}
            />

            <Typography sx={{ ...normalTextStyle, paddingTop: '27px' }}>
              8. Робота з кризовими вагітними.
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              9. При наявності вільних кімнат — тимчасове розміщення в будинку турботи безкоштовно.
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              10. Ми завжди будемо чекати родини на безкоштовний обід.
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              11. Допомога з пошуком роботи, навчанням для дітей. Є можливість допомогти з навчанням
              закордоном.
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              12. Контроль перебування родин закордоном. Допомога при потребах. Ми раз в тиждень
              спілкуємось зі всіма нашими біженцями які проживають закордоном.мм
            </Typography>

            <Grid paddingTop={'17px'} display={'flex'} flexDirection={'row'} gap={'7px'}>
              <PDFIcon />
              <Link
                download={'PROJECT SHELTER HOUSE HEART'}
                href={'/documents/shlelter_house.pdf'}
                sx={{
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: colors.matteBlack,
                    textUnderlineOffset: '5px',
                  },
                }}
              >
                <Typography sx={normalTextStyle}>PROJECT SHELTER HOUSE “HEART”</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid paddingTop={'27px'} display={'flex'} flexDirection={'row'} gap={'50px'}>
          <Box
            component={'img'}
            alt={'care_home1'}
            src={'/images/projects/careHome4.png'}
            width={'395px'}
            height={'432px'}
          />
          <Box
            component={'img'}
            alt={'care_home1'}
            src={'/images/projects/careHome5.png'}
            width={'303px'}
            height={'432px'}
          />
          <Box
            component={'img'}
            alt={'care_home1'}
            src={'/images/projects/careHome6.png'}
            width={'372px'}
            height={'432px'}
          />
        </Grid>
      </>
    </DetailedInformationPageContainer>
  );
};

export default CareHome;
