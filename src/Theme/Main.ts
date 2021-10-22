import { createTheme } from "@mui/material";

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
    }
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
    }
  }
}

export default theme
