import { useTheme } from '@qctoken/theme';
import type { ClassProps } from '@qctoken/register/lib/types';
import type { SvgIconNameType } from './type';
import { useMemo } from 'react';

export function SvgIcon({ bc }: ClassProps<SvgIconNameType>) {
  const theme = useTheme();
  const colorMapper = useMemo(
    () => ({
      primary: theme.colors.primary.main,
      secondary: theme.colors.secondary.main,
      main: theme.colors.text.main,
      white: theme.colors.common.white,
      black: theme.colors.common.black,
      inherit: 'currentColor',
    }),
    [theme],
  );

  return (
    <svg
      viewBox={`0 0 ${bc.viewBox}`}
      fill="none"
      css={[
        {
          flexShrink: 0,
          width: bc.width,
        },
        colorMapper[bc.color] && {
          fill: colorMapper[bc.color],
        },
      ]}
      dangerouslySetInnerHTML={{ __html: bc.content }}
    />
  );
}
