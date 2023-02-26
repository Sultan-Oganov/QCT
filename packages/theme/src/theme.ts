import { type Theme } from '@emotion/react';
import { type Colors, withCache } from './hooks/useThemeColorsPlain';

const SPACING = 4;

export const theme: Theme = {
  colors: {
    primary: {
      main: '#005FFF',
      light: '#478BFD',
    },
    secondary: {
      main: '#E0B371',
    },
    common: {
      white: '#fff',
      black: '#000',
      stroke: '#DEE6F3',
      background: '#F1F1F3',
      card: '#fff',
      nonActive: '#98A7B4',
    },
    disabled: {
      background: 'rgba(128, 128, 128, 0.15)',
      text: '#93A4B2',
    },
    text: {
      main: '#2A3658',
      disabled: '#93A4B2',
      error: '#B00020',
      green: '#26A17B',
    },
    svg: {
      primary: {
        dark: '#004ED1',
      },
      secondary: {
        dark: '#C19D67',
      },
      white: {
        main: '#F3F3F3',
        dark: '#CDCDCD',
      },
    },
  },
  spacing(
    top: number,
    right?: number,
    bottom?: number,
    left?: number,
  ): string | number {
    if (right === undefined) {
      return top * SPACING;
    }

    if (bottom === undefined || left === undefined) {
      return `${top * SPACING}px ${right * SPACING}px`;
    }

    return `${top * SPACING}px ${right * SPACING}px ${bottom * SPACING}px ${
      left * SPACING
    }px`;
  },
  selectColor(color: keyof Colors) {
    return withCache(this.colors)[color];
  },
  typography: {
    mega: {
      fontSize: 32,
      lineHeight: '120%',
      letterSpacing: '0.003em',
      fontWeight: 500,
      fontFamily: 'Rubik',
    },
    h1: {
      fontSize: 24,
      lineHeight: '120%',
      letterSpacing: '0.003em',
      fontWeight: 500,
      fontFamily: 'Rubik',
    },
    h2: {
      fontSize: 20,
      lineHeight: '120%',
      letterSpacing: '0.003em',
      fontWeight: 500,
      fontFamily: 'Rubik',
    },
    h3: {
      fontSize: 18,
      lineHeight: '120%',
      letterSpacing: '0.003em',
      fontWeight: 500,
      fontFamily: 'Rubik',
    },
    highlighted: {
      fontSize: 16,
      lineHeight: '130%',
      letterSpacing: '0.003em',
      fontWeight: 500,
      fontFamily: 'Rubik',
    },
    regular: {
      fontSize: 16,
      lineHeight: '120%',
      letterSpacing: '0.003em',
      fontWeight: 400,
      fontFamily: 'Rubik',
    },
    sub: {
      fontSize: 14,
      lineHeight: '130%',
      letterSpacing: '0.003em',
      color: '#BAC4CD',
      fontFamily: 'Rubik',
    },
    badge: {
      fontSize: 12,
      lineHeight: '120%',
      letterSpacing: '0.003em',
      fontFamily: 'Rubik',
    },
    micro: {
      fontSize: 11,
      lineHeight: '100%',
      letterSpacing: '0.003em',
      fontFamily: 'Rubik',
    },
    error: {
      fontSize: 12,
      lineHeight: '24px',
      color: '#B00020',
      fontFamily: 'Rubik',
    },
    nowrap: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
};
