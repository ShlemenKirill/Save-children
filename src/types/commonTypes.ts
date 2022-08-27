import { NavigationMenuItems } from 'core/constants/common';

export interface IMenuContext {
  currentMenuItem: NavigationMenuItems;
  setCurrentMenuItem: (item: NavigationMenuItems) => void;
}
