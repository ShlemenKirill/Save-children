import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useContext, useEffect } from 'react';
import { LanguageContext, Languages } from 'context/LanguageContext/LanguageContext';

export const LanguageSelector = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);
  const onLanguageChange = (event: SelectChangeEvent) => {
    const targetLanguage = event.target.value;
    setCurrentLanguage(targetLanguage as Languages);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <Select value={currentLanguage} onChange={onLanguageChange}>
        <MenuItem value={Languages.en}>EN</MenuItem>
        <MenuItem value={Languages.ukr}>UKR</MenuItem>
      </Select>
    </FormControl>
  );
};
