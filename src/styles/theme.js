import { Blue, Purple, Red, Yellow, Grey, Sky, Lime, Teal } from '@telkomdesign/colors';
import { createMuiTheme } from '@material-ui/core';
const fontWeight = {
  black: 900,
  bold: 700,
  light: 300,
  medium: 500,
  regular: 400,
  thin: 100
};

const containerFluid = {
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%'
};

const drawerWidth = '260px';

const theme = createMuiTheme({
  palette: {
    base: {
      primary: {
        main: Teal[60],
        dark: Teal[70],
        light: Teal[50],
      },
      secondary: {
        main: '#edfbfb',
        dark: Purple[70],
        light: Purple[50],
      },
      //optional
      tertiary: {
        main: Blue[60],
        dark: Blue[70],
        light: Blue[50],
      },
    },

    grey: Grey,

    common: {
      black: Grey[100],
      white: '#FFFFFF'
    },

    event: {
      success: {
        main: Lime[80],
        light: Lime[10]
      },
      error: {
        main: Red[60],
        light: Red[10]
      },
      information: {
        main: Sky[50],
        light: Sky[10]
      },
      warning: {
        main: Yellow[80],
        light: Yellow[10]
      },
      disabled: { main: Grey[50] }
    },

    fontWeight,

    text: {
      primary: {
        dark: Red[50],
        light: Red[80]
      },
      secondary: {
        dark: Purple[50],
        light: Purple[80]
      },
      tertiary: {
        dark: Purple[50],
        light: Purple[80]
      }
    },
  },

  pxToRem: (px) => {
    const base = window.getComputedStyle(document.body).getPropertyValue('font-size').replace('px', '');
    return `${px / base}rem`;
  },

  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeightLight: fontWeight.light,
    fontWeightRegular: fontWeight.regular,
    fontWeightMedium: fontWeight.medium,
    fontWeightBold: fontWeight.bold,
    fontSizeInherit: 'inherit',

    h1: {
      fontSize: '60px',
      fontWeight: fontWeight.light,
    },
    h2: {
      fontSize: '48px',
      fontWeight: fontWeight.regular,
    },
    h3: {
      fontSize: '34px',
      fontWeight: fontWeight.regular,
    },
    h4: {
      fontSize: '24px',
      fontWeight: fontWeight.regular,
    },
    h5: {
      fontSize: '20px',
      fontWeight: fontWeight.medium,
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: fontWeight.regular,
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: fontWeight.medium,
    },
    body1: {
      fontSize: '16px',
      fontWeight: fontWeight.regular,
    },
    body2: {
      fontSize: '14px',
      fontWeight: fontWeight.regular,
    },
    button: {
      fontSize: '14px',
      fontWeight: fontWeight.bold,
    },
    caption: {
      fontSize: '12px',
      fontWeight: fontWeight.regular,
    },
    overline1: {
      fontSize: '10px',
      fontWeight: fontWeight.regular,
    },
    overline2: {
      fontSize: '10px',
      fontWeight: fontWeight.medium,
    },
  },
  drawerWidth,
  container: {
    ...containerFluid,
    '@media (min-width: 300px)': { maxWidth: '260px' },
    '@media (min-width: 400px)': { maxWidth: '344px' },
    '@media (min-width: 500px)': { maxWidth: '428px' },
    '@media (min-width: 600px)': { maxWidth: '512px' },
    '@media (min-width: 700px)': { maxWidth: '696px' },
    '@media (min-width: 800px)': { maxWidth: '680px' },
    '@media (min-width: 900px)': { maxWidth: '764px' },
    '@media (min-width: 1000px)': { maxWidth: '848px' },
    '@media (min-width: 1100px)': { maxWidth: '932px' },
    '@media (min-width: 1200px)': { maxWidth: '1016px' },
    '@media (min-width: 1300px)': { maxWidth: '1100px' },
    '@media (min-width: 1400px)': { maxWidth: '1184px' },
    '@media (min-width: 1500px)': { maxWidth: '1268px' },
    '@media (min-width: 1600px)': { maxWidth: '1352px' },
    '@media (min-width: 1700px)': { maxWidth: '1436px' },
    '@media (min-width: 1800px)': { maxWidth: '1520px' },
    '@media (min-width: 1900px)': { maxWidth: '1604px' }
  },
  transition: { transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)' },
  boxShadow: { boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)' },
  colors: {
    teal: Teal,
    grey: Grey,
    red: Red
  }
});

export default theme;
