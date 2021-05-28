import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    fonts: {
      primary: string;
      secondary: string;
      terciary: string;
    }

    colors: {
      light: string;
    }
  }
}
