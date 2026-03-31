import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gold: Palette['primary'];
    navy: Palette['primary'];
  }
  interface PaletteOptions {
    gold?: PaletteOptions['primary'];
    navy?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#041534',
      light: '#1b2a4a',
      dark: '#020d1f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#775a10',
      light: '#fdd581',
      dark: '#5b4300',
      contrastText: '#ffffff',
    },
    gold: {
      main: '#775a10',
      light: '#fdd581',
      dark: '#5b4300',
      contrastText: '#ffffff',
    },
    navy: {
      main: '#041534',
      light: '#1b2a4a',
      dark: '#020d1f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8f9fb',
      paper: '#ffffff',
    },
    text: {
      primary: '#191c1e',
      secondary: '#45464e',
    },
    error: {
      main: '#ba1a1a',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 700,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
          fontFamily: '"Manrope", sans-serif',
          fontWeight: 700,
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#775a10',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(4, 21, 52, 0.06)',
          border: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  },
});

export default theme;
