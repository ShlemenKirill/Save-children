import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Languages } from 'core/constants/common';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const onLanguageChange = (event: SelectChangeEvent) => {
    const targetLanguage = event.target.value;
    i18n.changeLanguage(targetLanguage).catch();
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <Select value={i18n.language} onChange={onLanguageChange}>
        <MenuItem value={Languages.en}>EN</MenuItem>
        <MenuItem value={Languages.ukr}>UKR</MenuItem>
      </Select>
    </FormControl>
  );
};
