import { Box, Grid, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import DownloadLink from 'components/DownloadLink';
import InformationPageContainer from 'containers/InformationPageContainer';

const MotherSaveMyLife = () => {
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const pageImages = [
    '/images/information/mother_save_my_life3.png',
    '/images/information/mother_save_my_life4.png',
  ];
  return (
    <InformationPageContainer name={'Брошура «Матусю, збережи менi життя!»'}>
      <>
        <Grid>
          <Typography sx={normalTextStyle} paddingTop={'29px'}>
            Ми хочемо розповісти вам про справжнісіньке диво — людину, яка ще не народилася. Про те,
            що малюк відчуває, як розвивається з моменту зачаття. Головна мета цієї брошури —
            ЗБЕРЕГТИ ЖИТТЯ ДІТЕЙ ВІД АБОРТІВ.
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            Тільки-но дві клітини мами і татка зустрілися, ще немає ні мозку, ні серця, але дитина
            вже реагує на настрій мами. Мама радіє — маленька цяточка, яку видно лише під
            мікроскопом, гойдається повільно. Мама сумує, переживає або плаче — дитина стукає так,
            як стукає наше серце, коли ми стривожені.
          </Typography>
          <Typography sx={normalTextStyle} paddingTop={'10px'}>
            “Привіт, я маленька людина на самому початку свого життя. З моменту зачаття і до
            сьогодні я - справжнісінька людина. У мене є голова, тулуб, ручки і ніжки, я можу чути і
            відчувати біль. Я - унікальний, адже іншого такого, як я, у світі не існує.”{' '}
            <DownloadLink
              fileName={'mother_save_my_life_broshure'}
              src={'/documents/mother_save_my_life_broshure.pdf'}
            />
          </Typography>
        </Grid>
        <Grid display={'flex'} flexDirection={'column'} gap={'50px'} paddingTop={'30px'}>
          <Grid display={'flex'} flexDirection={'row'} gap={'50px'}>
            <Box
              component={'img'}
              src={'/images/information/mother_save_my_life1.png'}
              alt={'mother_save_my_life'}
              width={'560px'}
              height={'794px'}
            />
            <Box
              component={'img'}
              src={'/images/information/mother_save_my_life2.png'}
              alt={'mother_save_my_life'}
              width={'560px'}
              height={'794px'}
            />
          </Grid>
          {pageImages.map((imageSrc) => {
            return (
              <Box
                key={imageSrc}
                component={'img'}
                src={imageSrc}
                alt={'/images/information/mother_save_my_life1.png'}
                width={'1170px'}
                height={'830px'}
              />
            );
          })}
        </Grid>
      </>
    </InformationPageContainer>
  );
};

export default MotherSaveMyLife;
