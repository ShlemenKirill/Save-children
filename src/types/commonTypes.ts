export interface IMenuContext {
  currentMenuItem: string;
  setCurrentMenuItem: (item: string) => void;
  isOnScroll: boolean;
  setIsOnScroll: (isScroll: boolean) => void;
}
