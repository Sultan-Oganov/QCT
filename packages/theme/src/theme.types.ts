import '@emotion/react';
import type { CSSObject } from '@emotion/react';
import type { Colors } from './hooks/useThemeColorsPlain';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: {
        main: string;
        light: string;
      };
      secondary: {
        main: string;
      };
      common: {
        white: string;
        black: string;
        stroke: string;
        background: string;
        card: string;
        nonActive: string;
      };
      disabled: {
        background: string;
        text: string;
      };
      text: {
        main: string;
        disabled: string;
        error: string;
        green: string;
      };
      svg: {
        primary: {
          dark: string;
        };
        secondary: {
          dark: string;
        };
        white: {
          main: string;
          dark: string;
        };
      };
    };

    typography: {
      mega: CSSObject;
      h1: CSSObject;
      h2: CSSObject;
      h3: CSSObject;
      highlighted: CSSObject;
      regular: CSSObject;
      sub: CSSObject;
      badge: CSSObject;
      micro: CSSObject;
      error: CSSObject;
      nowrap: CSSObject;
    };

    spacing(
      top: number,
      right?: number,
      bottom?: number,
      left?: number,
    ): string | number;
    selectColor(color: keyof Colors): string;
  }
}
