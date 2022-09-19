import React from 'react';
import { IMenuContext } from 'types/commonTypes';
import { NavigationMenuItems } from 'core/constants/common';

export const MenuContext = React.createContext<IMenuContext>({
  currentMenuItem: NavigationMenuItems.main,
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
