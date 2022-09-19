import { Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import PageContainer from 'containers/PageContainer';
import { colors } from 'core/constants/colors';
import { INFORMATION } from 'core/constants/navigation';
import { fonts } from 'core/constants/fonts';
import { IInformationPageContainerProps } from 'types/propTypes';

const InformationPageContainer = ({ children, name }: IInformationPageContainerProps) => {
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
              {name}
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
              {name}
            </Typography>
          </Grid>
          {children}
        </>
      </PageContainer>
    </Grid>
  );
};

export default InformationPageContainer;
