import { useMemo } from 'react';
import { type Theme, useTheme, css } from '@emotion/react';
import type { CSSObject, SerializedStyles } from '@emotion/serialize';

type StylesConstructor<I, ARGS extends any[]> =
  | I
  | ((theme: Theme, ...args: ARGS) => I);
type StylesHook<R, ARGS extends any[]> = (...args: ARGS) => R;

function convertToCss<K extends string>(styles: { [key in K]: CSSObject }): {
  [key in K]: SerializedStyles;
} {
  const keys = Object.keys(styles) as K[];
  const acc = {} as {
    [key in K]: SerializedStyles;
  };

  for (const key of keys) {
    const cssValue = css(styles[key]);
    acc[key] = cssValue;
  }

  return acc;
}

export function makeStyles<KEY extends string, ARGS extends any[]>(
  styles: StylesConstructor<{ [key in KEY]: CSSObject }, ARGS>,
): StylesHook<{ [key in KEY]: SerializedStyles }, ARGS> {
  if (typeof styles === 'function') {
    const useStyles = (...args: ARGS) => {
      const theme = useTheme();
      // TODO: Need add cache to process it one time for uniq [styles function, theme]
      const cssStyles = useMemo(
        () => convertToCss(styles(theme, ...args)),
        [theme, ...args],
      );

      return cssStyles;
    };

    return useStyles;
  }

  // TODO: make delayed function to convert when we need it
  const cssStyles = convertToCss(styles);

  return function useStyles() {
    return cssStyles;
  };
}
