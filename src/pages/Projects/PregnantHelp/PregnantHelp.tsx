import { Box, Breadcrumbs, Grid, Link, List, ListItem, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { PROJECTS } from 'core/constants/navigation';
import { fonts } from 'core/constants/fonts';
import PageContainer from 'containers/PageContainer';

const PregnantHelp = () => {
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  const normalTextStyleSemiBold = {
    color: colors.matteBlack,
    ...fonts.montserratSemibold16,
  };
  const normalTextStyleBold = {
    color: colors.matteBlack,
    ...fonts.montserratBold16,
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
            <Link href={PROJECTS} underline='hover'>
              <Typography
                sx={{
                  color: colors.matteBlack,
                  opacity: '0.7',
                  ...fonts.montserratNormal14,
                }}
              >
                Наши проекты
              </Typography>
            </Link>
            <Typography
              sx={{
                color: colors.matteBlack,
                ...fonts.montserratNormal14,
              }}
            >
              Допомога кризовим вагітним
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
              Допомога кризовим вагітним
            </Typography>
          </Grid>
          <Typography sx={{ ...normalTextStyle, paddingTop: '20px' }}>
            Якщо ви опинились перед вибором зберегти життя або зробити аборт, зверніться в
            Громадську організацію «ЗБЕРЕЖИ ДИТИНУ», психологи служби консультують жінок, які
            зіткнулися з проблемою незапланованої вагітності.
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Крім того, при організації "Збережи дитину" діє кризова телефонна лінія з питань
            незапланованої вагітності, а також надаються психологічні консультації через інтернет.
            Підопічні «Збережи дитину»- жінки, які прийняли рішення зберегти вагітність і народити
            дитину, а також багатодітні сім’ї — отримують соціально-побутову, матеріальну, юридичну
            та іншу допомогу.
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
            Якщо у Вас виникне потреба в психологічній підтримці з питань, пов’язаних з
            незапланованою вагітністю, Ви можете зателефонувати на Телефонну лінію з питань
            незапланованої вагітності:{' '}
            <Typography display={'inline'} sx={{ ...normalTextStyleBold }}>
              050 445 34 45 Трухан Наталія.
            </Typography>
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
            Жінці, яка опинилася у важкій життєвій ситуації, можна допомогти.
          </Typography>
          <Typography
            sx={{ ...fonts.montserratMedium24, color: colors.matteBlack, paddingTop: '21px' }}
          >
            10 важливих питань, які можуть утримати жінку від поспішного рішення зробити аборт
          </Typography>
          <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
            Якщо ви психолог в доабортному кабінеті, або серед своїх близьких чи знайомих ви
            зустрінете ту, хто в силу тих чи інших причин обдумує рішення зробити аборт та
            звертається до вас за порадою, ця стаття стане у нагоді. Ми пропонуємо десять питань,
            які ви можете задати близькій вам жінці, якщо ви хочете допомогти їй у важкій ситуації.
            Отже
          </Typography>
          <Grid display={'flex'} flexDirection={'row'} gap={'55px'} paddingTop={'15px'}>
            <Grid>
              <Box
                component={'img'}
                alt={'save-children'}
                src={'/images/projects/pregnantFull.png'}
              />
            </Grid>
            <Grid>
              <Typography sx={{ ...normalTextStyleSemiBold }}>
                1. Як Ви уявляєте зараз дитину, яку Ви носите?
              </Typography>
              <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
                Це питання важливе тому, що в момент прийняття рішення про аборт свідомість жінки
                часто буває намертво прив’язана до життєвих обставин, що змушує її зробити аборт, і
                вона не бачить більше нічого. Психологи називають цей стан «тунельною свідомістю».
                Коли ж ми запитуємо жінку, як вона уявляє дитину, вона повинна звернутися не до
                обставин, які підштовхують її до аборту (про них ми поговоримо пізніше), а до того,
                хто взагалі той, від кого вона хоче позбутися.
              </Typography>
              <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '15px' }}>
                2. Яке ім’я Ви б дали Вашій дитині? Кого Ви більше хочете, хлопчика чи дівчинку?
              </Typography>
              <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
                Ці питання також допомагають жінці переключити увагу з обставин на дитину, трішки
                помріяти.
              </Typography>
              <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '15px' }}>
                3. Чим ця внутрішньоутробна дитина відрізняється від Вашої старшої дитини?
              </Typography>
              <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
                Це питання для жінки, у якої вже є діти. «А чим дитина, яка ще не народилася, для
                Вас відрізняється від тієї, яка народилася?» Додаткове питання на цю тему: «А з
                першою дитиною у Вас все було безхмарно?
              </Typography>
              <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
                Чи доводилося Вам подолати якісь труднощі заради того, щоб вона народилася?».
              </Typography>
              <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
                Як правило, і з попередньою дитиною жінці доводилося долати якісь труднощі, якщо не
                в період вагітності, то вже після народження дитини. Аборт відбувається, якщо дитина
                є, а жінка відмовляється пускати його в своє життя.
              </Typography>
              <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '15px' }}>
                4. Чи хочете Ви мати дітей?
              </Typography>
              <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
                Це питання дуже тонке і дуже складне. Його потрібно поставити дуже вчасно, з великою
                тактовністю і увагою до жінки. Завдання цього питання — дати жінці можливість
                задуматися в цілому про своє життя, про свою долю, щоб вона уявила свою життєву
                перспективу, згадала про свої цінності, задумалася про якісь основні для неї речі. І
                вона вже не буде прив’язана конкретно до цієї життєвої ситуації, яка у неї є зараз і
                через яку вона хоче зробити аборт. Вона подумає про себе як про людину і як про
                жінку. Вона взагалі хоче мати дітей? Чим буде наповнене її життя? Відповідаючи на це
                питання, жінка може проговоритися про свої страхи, про відкидання жіночності, про
                бунт проти своєї жіночої ролі і що-небудь ще. Можна буде вислухати її, обговорити
                якісь важливі моменти, можливо, допомогти позбутися від якихось страхів або
                стереотипів.
              </Typography>
            </Grid>
          </Grid>
          <Box
            paddingTop={'25px'}
            component={'img'}
            alt={'little-children'}
            src={'/images/projects/little_children.png'}
          />
          <Grid paddingLeft={'500px'}>
            <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '25px' }}>
              5. Що Вам заважає народити дитину?
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              Тепер ми даємо можливість жінці поговорити про ті обставини, які штовхають її на
              аборт. Це дуже важливе питання, тому що ці обставини потрібно обов’язково з нею
              обговорити. Дати можливість відповісти на це питання розгорнуто, розповісти про
              проблеми, страхи, сумніви, через яких вона задумалася про аборт. Потрібно чуйно і
              уважно вислухати її, адже ці проблеми для неї дійсно серйозні, навіть якщо Вам вони і
              не здаються такими. Можливо, Вашій співбесідниці стане легше просто від того, що Ви її
              вислухали з розумінням.
            </Typography>
            <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '15px' }}>
              6. Чому Ви вважаєте, що маєте право зробити аборт?
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              Можна поставити таке глобальне питання. Це насправді дуже об’ємна тема. Розмова може
              повернутися в різні напрямки, в залежності від того, що відповість жінка. Вона може
              сказати: «Це юридично дозволено». Далі можна задати питання: а чи вважає вона, що все,
              що юридично дозволено, є морально допустимим? Так, після аборту, в тюрму її, звичайно,
              не посадять. Але ось з моральної точки зору як її вчинок буде виглядати для неї ж
              самої? Вагітна жінка може відповісти: «Але я ж можу розпоряджатися своїм тілом!» Тоді
              можна запитати: «А чому Ви впевнені, що це повністю Ваше тіло? Ви впевнені, що саме у
              цій частині Вашого тіла така ж сама стать, як і у решти Вашого тіла? А де Ви бачили
              частини тіла, які були б з іншою групою крові, ніж все інше тіло?».
            </Typography>
          </Grid>
          <Grid display={'flex'} gap={'30px'} paddingTop={'25px'}>
            <Box
              component={'img'}
              alt={'pregnant_women'}
              src={'/images/projects/pregnant_women1.png'}
            />
            <Box
              component={'img'}
              alt={'pregnant_women'}
              src={'/images/projects/pregnant_women2.png'}
            />
            <Box
              component={'img'}
              alt={'pregnant_women'}
              src={'/images/projects/pregnant_women3.png'}
            />
          </Grid>
          <Grid paddingLeft={'500px'}>
            <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '25px' }}>
              7. Як Ви уявляєте процедуру аборту, чи відомо Вам що-небудь про її наслідки?
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              Дані:
            </Typography>
            <List
              sx={{
                listStyleType: 'disc',
                padding: '0 0 0 30px',
              }}
            >
              <ListItem
                sx={{
                  display: 'list-item',
                  padding: 0,
                }}
              >
                <Typography sx={{ ...normalTextStyle }}>
                  аборт як причина вторинного безпліддя складає до 41%;
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: 'list-item',
                  padding: 0,
                }}
              >
                <Typography sx={{ ...normalTextStyle }}>
                  бпісля аборту частота мимовільних викиднів збільшується в 8-10 разів;
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: 'list-item',
                  padding: 0,
                }}
              >
                <Typography sx={{ ...normalTextStyle }}>
                  близько 60% первісток жінок у віці старше 30 років страждають невиношуванням
                  вагітності в зв’язку з попередніми численними абортами;
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: 'list-item',
                  padding: 0,
                }}
              >
                <Typography sx={{ ...normalTextStyle }}>
                  у 38% пацієнток після штучного аборту на протязі, як мінімум, двох місяців не може
                  нормалізуватися менструальний цикл.
                </Typography>
              </ListItem>
            </List>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              Після розповіді жінці про медичні наслідки аборту, можна запитати у неї, чи відомо їй,
              що бувають не тільки фізичні, але і душевні наслідки аборту?
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              Чи знайомий їй такий термін, як «постабортний синдром»?
            </Typography>
            <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '15px' }}>
              8. Чи замислювалися Ви коли-небудь, кому вигідно, щоб масово здійснювалися аборти?
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              Ставлення до абортів в корені змінилося. І в зв’язку з цим виникає питання: «Якщо
              відношення так сильно змінюється, значить, є хтось, хто зацікавлений, щоб громадська
              думка була саме таке. Хто б це міг бути, і в чому його інтерес? ».
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              Абортивна сировина — це плацента і стовбурові клітини, і це дуже дорога сировина, яка
              широко використовується, і добувати її потрібно в промислових масштабах. Звичайно,
              навряд чи аборти були легалізовані саме з метою отримання цих матеріалів, але зараз ці
              матеріали активно видобовуються, і їх не хочеться втрачати тим людям, які на них
              роблять гроші. І у них є цілком прагматичний інтерес, щоб число абортів не
              скорочувалася або, якщо скорочувалося, то незначно. І далі можна запитати жінку, чи
              згодна вона таким чином бути використаною якимись силами? Організаціями, людьми, які
              до її життя ніякого відношення не мають і яким її доля глибоко байдужа.
            </Typography>
          </Grid>
          <Grid display={'flex'} gap={'30px'} paddingTop={'25px'}>
            <Box
              component={'img'}
              alt={'pregnant_women'}
              src={'/images/projects/pregnant_women4.png'}
            />
            <Box
              component={'img'}
              alt={'pregnant_women'}
              src={'/images/projects/pregnant_women5.png'}
            />
          </Grid>
          <Grid paddingLeft={'500px'}>
            <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '25px' }}>
              9. Хто в Вашій родині проти дитини і хто за нього?
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              Повертаючись до життєвих обставин жінки, можливо, з’ясується, що хтось із родичів
              дійсно проти. Які аргументи вони наводять? Чому вони це роблять? Робили вони самі
              аборти і як вони ставляться до такого кроку? З’ясувавши ці важливі обставини,
              необхідно допомогти жінці боротися з тиском всередині сім’ї і навіть, можливо, з
              насильством — фізичним, емоційним, моральним, матеріальним і т.д.
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              Дуже важливо дізнатися, а чи є хоч хтось, хто за дитину і чи могли б ці люди надати їй
              підтримку, в тому числі, наприклад, взяти на себе конфронтацію з тими, хто проти.
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              Чи знайомий їй такий термін, як «постабортний синдром»?
            </Typography>
            <Typography sx={{ ...normalTextStyleSemiBold, paddingTop: '15px' }}>
              10. Яку допомогу я можу Вам надати, щоб Ви прийняли рішення народити дитину?
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              Нарешті, добре запитати у жінки, а чим саме Ви можете їй допомогти. Це питання
              правильніше ставити в кінці бесіди, щоб жінка вже встигла висловити свої сумніви і
              страхи і після того, як деякі з них виявляться «розхитаними», коли перед жінкою
              з’явиться якась альтернатива аборту.
            </Typography>
            <Typography sx={{ ...normalTextStyle, paddingTop: '7px', paddingLeft: '15px' }}>
              Коли жінка говорить про те, що вона хоче зробити аборт, вона повністю з’єднана з тими
              обставинами, які їй заважають зберегти дитину. І якщо у неї в цей момент запитати: «А
              що я можу зробити?», — вона, швидше за все, відповість, що нічого, і що, в загалом, не
              дуже їй ця допомога і потрібна. Коли ж жінка від’єдналася хоча б трохи від своїх
              життєвих обставин, тоді їй можна розповісти про те, як ці обставини можна змінити.
            </Typography>
          </Grid>
        </>
      </PageContainer>
    </Grid>
  );
};

export default PregnantHelp;
