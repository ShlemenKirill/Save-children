import React from 'react';
import { IMenuContext } from 'types/commonTypes';
import { NAVIGATION_MAIN } from 'core/constants/common';

export const MenuContext = React.createContext<IMenuContext>({
  currentMenuItem: NAVIGATION_MAIN,
  setCurrentMenuItem: () => {
    /**
     * void function
     */
  },
  isOnScroll: false,
  setIsOnScroll: () => {
    /**
     * void function
     */
  },
});
