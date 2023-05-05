import { createContext } from 'react';

export enum Languages {
  en = 'en',
  ukr = 'ukr',
}

export interface ILanguageContext {
  currentLanguage: Languages;
  setCurrentLanguage: (item: Languages) => void;
}
export const LanguageContext = createContext<ILanguageContext>({
  currentLanguage: Languages.en,
  setCurrentLanguage: () => {
    /**
     * void function
     */
  },
});
