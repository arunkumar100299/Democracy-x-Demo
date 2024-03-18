import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from './LanguageSlice';
import { useEffect } from 'react';

const languages = [
  {
    code: 'en',
    language: 'English',
  },
  {
    code: 'ta',
    language: 'Tamil',
  },
  {
    code: 'de',
    language: 'German',
  },
];

export default function Language() {
  const { i18n } = useTranslation();
  const lan = useSelector((state) => state.langMode);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    dispatch(changeLanguage(event.target.value));
  };

  useEffect(() => {
    i18n.changeLanguage(lan?.lang);
  }, []);

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          size="small"
          value={lan?.lang}
          label="Language"
          onChange={handleChange}
          sx={{ height: '26px' }}
        >
          {languages.map((item, index) => {
            return (
              <MenuItem key={index} value={item.code}>
                {item.language}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
