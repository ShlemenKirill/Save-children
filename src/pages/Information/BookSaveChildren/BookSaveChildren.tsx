import { Box, Grid, Typography } from '@mui/material';
import DetailedInformationPageContainer from 'containers/DetailedInformationPageContainer';
import { ContainerTypes } from 'core/constants/common';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';

const BookSaveChildren = () => {
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const headerTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratMedium24,
  };
  return (
    <DetailedInformationPageContainer
      name={'Книга «Збереженнi життя»'}
      containerType={ContainerTypes.information}
    >
      <>
        <Typography sx={normalTextStyle} paddingTop={'33px'}>
          Материнські історії з нашої книги «Збережені життя» ми збирали більше року. До книги
          увійшло понад 50 історій коли мама стояла перед вибором - життя чи аборт, та обрала життя.
          Ось кілька із них.
        </Typography>
        <Grid display={'flex'} flexDirection={'row'} gap={'50px'}>
          <Box
            paddingTop={'23px'}
            component={'img'}
            src={'/images/information/book-save-child1.png'}
            alt={'book-save-child'}
            width={'758px'}
            height={'520px'}
          />
          <Grid>
            <Typography sx={headerTextStyle} paddingTop={'11px'}>
              «Із кризової вагітності є вихід, проте це не аборт! Я дарую життя!»
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'12px'}>
              Життя не завжди малює нам ті картини, які б хотілося бачити. Буває час, коли навколо
              усе зупиняється. Ти втрачаєш себе, втрачаєш час, втрачаєш усі орієнтири.
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'7px'}>
              Дуже дякую підтримці «Збережи дитину». Слова психологині «Збережи дитину»: «Із
              кризової вагітності є вихід, але це — не аборт. Аборт не вирішить жодної проблеми, а
              лише ускладнить!» — для мене надважливі.
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'7px'}>
              Свого часу психологічна підтримка подарувала віру і врятувала мого малюка. І я дарую
              життя! Сьогодні я вживаю вітаміни, більше гуляю на повітрі та малюю образ мого
              материнства. Дякую за збережене життя!
            </Typography>
          </Grid>
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} gap={'70px'}>
          <Grid>
            <Typography sx={headerTextStyle} paddingTop={'49px'}>
              «Настане час, коли врятована дитинка врятує і тебе!»
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'13px'}>
              Я — мама чотирьох діток. Звичайно, у моєму житті було різне: і скрутно, і багато.
              Особливо, коли ти живеш не лише своїми забаганками. Та з часом життя показує, що все у
              ньому можливо.
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'7px'}>
              Як багатодітна мама я розумію, що матеріальне становище — не головне, особливо, коли
              мова йде про життя. Маленька лялечка, яка живе в тобі, подарує багато радості й
              щастя...
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'7px'}>
              Після народження своїх діток я зрозуміла, що для дитини головне не дорогі іграшки й
              одяг, а мамина любов!
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'7px'}>
              Дорогі жінки, збережіть життя, не йдіть на непоправний крок. Усе обов’язково буде
              добре. Повірте, настане час, коли врятована дитинка врятує і вас!
            </Typography>
            <Typography sx={headerTextStyle} paddingTop={'40px'}>
              «Питання щодо аборту постало переді мною в 19 років, хоча створити сім’ю мріяла після
              28 років. Та склалося у житті усе не так, як планувалося.»
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'13px'}>
              Я прагнула якнайшвидше втекти з домівки. Бійки, сварки — жах, в якому я зростала. А
              так хотілося сімейного затишку, підтримки, простого маминого: «Я тебе люблю!». Не
              отримавши любові і тепла від рідних, я отримала її від майбутнього чоловіка. Мій
              майбутній чоловік був на шість років старший від мене. Тоді мені здалося, що він такий
              дорослий, авторитетний і, звичайно ж, я закохалася. На жаль, він був не з
              благополучної родини, проте тоді це мене не лякало. Я кохала і була коханою.
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'10px'}>
              Наші стосунки розвивалися стрімко, незабаром ми почали жити разом і я завагітніла.
              Дізнавшись про вагітність, мене заполонив страх. Зізнаюся, що поділитися тоді новиною
              з мамою я так і не змогла, надто її боялася. Таких розмов у нас ніколи не було і мама
              малювала моє майбутнє зовсім по-іншому.
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'10px'}>
              А згодом виявилося, що і чоловік був не готовий до сімейного життя. Мамі про
              вагітність я зізналася на 8-му тижні вагітності. Замість привітання і щастя почула
              холодне: «Аборт! Або ти мені не дочка!». Зізнаюся, хотіла зробити аборт до останнього
              моменту, але не змогла. Скільки тоді різних думок роз’їдали мені серце, а інколи і
              жаль щодо загубленого власного життя мучив нещадно.
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'10px'}>
              Після пологів і народження донечки усе ще більше погіршилося. Мама зненавиділа мене, а
              ще більше — новонароджену донечку і чоловіка. Негативні думки ще більше знищували
              зсередини. А далі... Далі було розлучення, а після пережитих потрясінь — хвороба...
              Саме у той час я переоцінила власне життя і зрозуміла, що моя донечка — найцінніший
              дар, який подарований мені Богом...Настав навіть час, коли моє дитя вберегло мене від
              самогубства. Саме тоді я подумала: «Вісім років тому я врятувала маленьке життя, а
              тепер мій янгол рятує мене!»
            </Typography>
            <Typography sx={normalTextStyle} paddingTop={'10px'}>
              Моя донечка дарує віру і стимул боротися за життя. Люблю її більше за життя! І весь
              час нагадую їй про свої почуття. Якомога частіше нагадуйте дітям про свою любов...
              Любов найбільша сила, що рятує.
            </Typography>
          </Grid>
          <Grid>
            <Box
              paddingTop={'41px'}
              component={'img'}
              src={'/images/information/book-save-child2.png'}
              alt={'book-save-child'}
              width={'368px'}
              height={'498px'}
            />
            <Box
              paddingTop={'70px'}
              component={'img'}
              src={'/images/information/book-save-child3.png'}
              alt={'book-save-child'}
              width={'368px'}
              height={'498px'}
            />
          </Grid>
        </Grid>
      </>
    </DetailedInformationPageContainer>
  );
};

export default BookSaveChildren;
