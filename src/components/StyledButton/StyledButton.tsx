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
            background: colors.violet,
            ...fonts.montserratBold16,
            width: '200px',
            height: '45px',
            '&:hover': {
              background: colors.violet,
              filter: 'drop-shadow(0px 6px 21px rgba(102, 44, 145, 0.5))',
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
            border: `1px solid ${colors.violet}`,
            color: colors.violet,
            ...fonts.montserratBold16,
            minWidth: '200px',
            width: 'max-content',
            height: '45px',
            '&:hover': {
              border: `1px solid ${colors.violetDark}`,
              filter: 'drop-shadow(0px 6px 21px rgba(102, 44, 145, 0.5))',
            },
          }}
        >
          {children}
        </Button>
      );
  }
};

export default StyledButton;
