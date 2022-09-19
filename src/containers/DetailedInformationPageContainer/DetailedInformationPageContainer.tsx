import { Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import PageContainer from 'containers/PageContainer';
import { colors } from 'core/constants/colors';
import { INFORMATION, PROJECTS } from 'core/constants/navigation';
import { fonts } from 'core/constants/fonts';
import { ContainerTypes } from 'core/constants/common';
import { IDetailedInformationPageContainerProps } from 'types/propTypes';

const DetailedInformationPageContainer = ({
  children,
  name,
  containerType,
}: IDetailedInformationPageContainerProps) => {
  const linkToParent = containerType === ContainerTypes.information ? INFORMATION : PROJECTS;
  return (
    <Grid
      sx={{
        backgroundColor: colors.mainBackground,
      }}
    >
      <PageContainer>
        <>
          <Breadcrumbs>
            <Link href={linkToParent} underline='hover'>
              <Typography
                sx={{
                  color: colors.matteBlack,
                  opacity: '0.7',
                  ...fonts.montserratNormal14,
                }}
              >
                {containerType}
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

export default DetailedInformationPageContainer;
