import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00114D',
    },
    secondary: {
      main: '#00114D',
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00114D',
    },
    secondary: {
      main: '#00114D',
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
});
