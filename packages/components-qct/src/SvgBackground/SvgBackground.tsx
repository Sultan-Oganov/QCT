import { useMemo } from 'react';
import { useTheme } from '@qctoken/theme';
import type { SvgBackgroundNameType } from './type';
import { type ClassProps, mapComponentOne } from '@qctoken/register';

export function SvgBackground(props: ClassProps<SvgBackgroundNameType>) {
  const { bc } = props;
  const theme = useTheme();
  const colorMapper = useMemo(
    () => ({
      primary: {
        main: theme.colors.primary.main,
        dark: theme.colors.svg.primary.dark,
      },
      secondary: {
        main: theme.colors.secondary.main,
        dark: theme.colors.svg.secondary.dark,
      },
      white: {
        main: theme.colors.common.white,
        dark: theme.colors.svg.white.dark,
      },
      black: {
        main: theme.colors.common.black,
        dark: theme.colors.svg.white.dark,
      },
    }),
    [theme],
  );

  return (
    <div
      css={[
        {
          width: bc.size,
          height: bc.size,
          background: colorMapper[bc.color].dark,
          borderRadius: `${bc.design}%`,
          overflow: 'hidden',
        },
      ]}
    >
      <div
        css={[
          {
            background: colorMapper[bc.color].main,
            width: '100%',
            borderBottomLeftRadius: `${bc.design}%`,
            borderBottomRightRadius: `${bc.design}%`,
            height: '94%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow:
              'inset -2px 0px 6px rgba(255, 255, 255, 0.2), inset 2px 4px 2px rgba(255, 255, 255, 0.2)',
          },
        ]}
      >
        {mapComponentOne(bc.child, props)}
      </div>
    </div>
  );
}
