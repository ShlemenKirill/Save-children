import { ButtonProps } from '@mui/material';
import { ButtonVariants, ContainerTypes, NAVIGATION_INFORMATION, NAVIGATION_OUR_PROJECTS } from 'core/constants/common';

export interface IStyledButtonProps extends ButtonProps {
  buttonVariant: ButtonVariants;
}

export interface IProjectCardProps {
  imageUrl: string;
  headerText: string;
  text: string;
  pathUrl: string;
}

export interface ISVGIconProps {
  color?: string;
}

export interface IDownloadLinkProps {
  fileName: string;
  src: string;
}

export interface IDetailedInformationPageContainerProps {
  children: JSX.Element;
  name: string;
  containerType: ContainerTypes;
}

export interface IDetailedLinkProps {
  handler: () => void;
}

export interface IFinancialHelpCardProps {
  destination: string;
}
