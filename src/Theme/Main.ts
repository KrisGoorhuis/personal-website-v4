import { createTheme, Palette, PaletteColor, PaletteColorOptions, PaletteOptions } from "@mui/material";

const theme = createTheme({
  green: {
    main: '#585123'
  },
  gold: {
    main: '#eec170'
  },
  bronze: {
    main: '#f2a65a'
  },
  mango: {
    main: '#f58549'
  },
  red: {
    main: '#772f1a'
  },  
  black: {
    light: '#222222',
    dark: '#1f1f1f'
  },
  palette: {

    primary: {
      light: '#f58549',
      main: '#f58549',
      dark: '#f58549'
    },
    secondary: {
      light: '#585123',
      main: '#585123',
      dark: '#585123'
    },
  }
})


declare module '@mui/material/styles' {
  interface Theme {
    green: {
      main: string;
    };
    gold: {
      main: string;
    };
    bronze: {
      main: string;
    };
    mango: {
      main: string;
    };
    red: {
      main: string;
    };
    black: {
      light: string;
      dark: string;
    },
    palette: Palette
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    green?: {
      main?: string;
    };
    gold?: {
      main?: string;
    };
    bronze?: {
      main?: string;
    };
    mango?: {
      main?: string;
    };
    red?: {
      main?: string;
    };
    black?: {
      light: string;
      dark: string;
    },
    // palette: PaletteOptions | undefined
  }
}

export default theme
