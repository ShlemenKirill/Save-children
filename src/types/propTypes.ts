import { ButtonProps } from '@mui/material';
import { ButtonVariants } from 'core/constants/common';

export interface IStyledButtonProps extends ButtonProps {
  buttonVariant: ButtonVariants;
}
