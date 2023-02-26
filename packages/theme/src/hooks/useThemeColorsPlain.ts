import { useTheme, type Theme } from '@emotion/react';

type ThemeColorsName = 'common' | 'primary' | 'secondary' | 'disabled' | 'text';
type ThemeColors = Pick<Theme['colors'], ThemeColorsName>;
export type Colors = Record<
  | `common.${keyof ThemeColors['common']}`
  | `primary.${keyof ThemeColors['primary']}`
  | `secondary.${keyof ThemeColors['secondary']}`
  | `disabled.${keyof ThemeColors['disabled']}`
  | `text.${keyof ThemeColors['text']}`
  | 'primary'
  | 'secondary'
  | 'main'
  | 'white'
  | 'black'
  | 'common'
  | 'inherit',
  string
>;

const cache = new WeakMap<any, Colors>();

function mapObject<N extends ThemeColorsName, NNested extends string>(
  name: N,
  obj: { [key in NNested]: string },
): Record<`${N}.${NNested}`, string> {
  const acc = {} as Record<`${N}.${NNested}`, string>;
  const keys = Object.keys(obj) as NNested[];

  keys.forEach((key) => {
    const nestedName = `${name}.${key}` as `${N}.${NNested}`;

    acc[nestedName] = obj[key];
  });

  return acc;
}

export function withCache(colors: Theme['colors']) {
  if (cache.has(colors)) {
    return cache.get(colors) as Colors;
  }

  const result: Colors = {
    primary: colors.primary.main,
    secondary: colors.secondary.main,
    main: colors.text.main,
    white: colors.common.white,
    black: colors.common.black,
    common: colors.common.background,
    inherit: 'inherit',
    ...mapObject('common', colors.common),
    ...mapObject('primary', colors.primary),
    ...mapObject('secondary', colors.secondary),
    ...mapObject('disabled', colors.disabled),
    ...mapObject('text', colors.text),
  };

  cache.set(colors, result);

  return result;
}

export function useThemeColorsPlain() {
  const theme = useTheme();

  return withCache(theme.colors);
}
