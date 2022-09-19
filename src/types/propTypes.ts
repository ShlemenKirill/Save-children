import { ButtonProps } from '@mui/material';
import { ButtonVariants } from 'core/constants/common';

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
