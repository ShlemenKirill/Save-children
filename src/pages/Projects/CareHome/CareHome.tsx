import { Box, Grid, Link, Typography } from '@mui/material';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ContainerTypes } from 'core/constants/common';
import PDFIcon from 'components/Icons/PDFIcon';
import DetailedInformationPageContainer from 'containers/DetailedInformationPageContainer';
import { useTranslation } from 'react-i18next';

const CareHome = () => {
  const { t } = useTranslation();
  const normalTextStyle = {
    color: colors.matteBlack,
    ...fonts.montserratNormal16,
  };
  return (
    <DetailedInformationPageContainer
      name={`${t('ourProjectsPage.careHomeProjectPage.header')}"`}
      containerType={ContainerTypes.projects}
    >
      <>
        <Grid paddingTop={'17px'}>
          <Typography sx={normalTextStyle}>
            {t('ourProjectsPage.careHomeProjectPage.p1')}
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
              {t('ourProjectsPage.careHomeProjectPage.p2')}
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              {t('ourProjectsPage.careHomeProjectPage.li1')}
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              {t('ourProjectsPage.careHomeProjectPage.li2')}
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
              {t('ourProjectsPage.careHomeProjectPage.li3')}
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              {t('ourProjectsPage.careHomeProjectPage.li4')}
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              {t('ourProjectsPage.careHomeProjectPage.li5')}
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              {t('ourProjectsPage.careHomeProjectPage.li6')}
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              {t('ourProjectsPage.careHomeProjectPage.li7')}
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
              {t('ourProjectsPage.careHomeProjectPage.li8')}
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              {t('ourProjectsPage.careHomeProjectPage.li9')}
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              {t('ourProjectsPage.careHomeProjectPage.li10')}
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              {t('ourProjectsPage.careHomeProjectPage.li11')}
            </Typography>

            <Typography sx={{ ...normalTextStyle, paddingTop: '10px' }}>
              {t('ourProjectsPage.careHomeProjectPage.li12')}
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
