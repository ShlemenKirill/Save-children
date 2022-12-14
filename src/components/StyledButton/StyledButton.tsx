import { Button } from '@mui/material';
import React from 'react';
import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { ButtonVariants } from 'core/constants/common';
import { IStyledButtonProps } from 'types/propTypes';

const StyledButton = ({ buttonVariant = ButtonVariants.primary, children }: IStyledButtonProps) => {
  switch (buttonVariant) {
    case ButtonVariants.primary:
      return (
        <Button
          variant='contained'
          sx={{
            textTransform: 'none',
            background: colors.violet,
            ...fonts.montserratBold16,
            minWidth: '200px',
            width: 'max-content',
            height: '45px',
            '&:hover': {
              background: colors.violet,
              filter: 'drop-shadow(0px 6px 16px rgba(102, 44, 145, 0.4))',
            },
          }}
        >
          {children}
        </Button>
      );
    case ButtonVariants.primaryGreen:
      return (
        <Button
          variant='contained'
          sx={{
            textTransform: 'none',
            background: colors.green,
            ...fonts.montserratBold16,
            minWidth: '200px',
            width: 'max-content',
            height: '45px',
            '&:hover': {
              background: colors.green,
              filter: 'drop-shadow(0px 6px 16px rgba(117, 152, 61, 0.4))',
            },
          }}
        >
          {children}
        </Button>
      );
    case ButtonVariants.secondary:
      return (
        <Button
          variant='outlined'
          sx={{
            textTransform: 'none',
            border: `1px solid ${colors.violet}`,
            color: colors.violet,
            ...fonts.montserratBold16,
            minWidth: '200px',
            width: 'max-content',
            height: '45px',
            '&:hover': {
              border: `1px solid ${colors.violetDark}`,
              filter: 'drop-shadow(0px 6px 16px rgba(102, 44, 145, 0.4))',
            },
          }}
        >
          {children}
        </Button>
      );
  }
};

export default StyledButton;
