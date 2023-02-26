import { useMemo } from 'react';
import type { ClassProps } from '@qctoken/register/lib/types';
import { useAdaptiveAttribute, useTheme } from '@qctoken/theme';
import type { TypographyColorType, TypographyNameType } from './types';
import { useRunExecutor } from '@qctoken/executor';
import { Observer } from '@qctoken/store';

export function Typography({
  bc,
  pageStore,
  values,
}: ClassProps<TypographyNameType>) {
  const theme = useTheme();
  const colorMapper = useMemo(
    (): Record<TypographyColorType, string> => ({
      primary: theme.colors.primary.main,
      secondary: theme.colors.secondary.main,
      main: theme.colors.text.main,
      white: theme.colors.common.white,
      black: theme.colors.common.black,
      nonActive: theme.colors.disabled.text,
    }),
    [theme],
  );
  const cssBc = useAdaptiveAttribute(bc, pageStore, ['color', 'hoverColor']);
  const computedTitle = useRunExecutor(pageStore, bc.getTitle, values);
  const title = String(computedTitle ?? bc.title ?? '');
  const renderText = (translatedTitle?: string) => (
    <span
      title={translatedTitle}
      css={[
        bc.styles,
        theme.typography[bc.variant],
        (bc.noWrap || bc.lines) && {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: bc.lines ? undefined : 'nowrap',
          minWidth: 0,
          maxWidth: '100%',
        },
        bc.lines && {
          display: '-webkit-box',
          WebkitLineClamp: `${bc.lines}`,
          WebkitBoxOrient: 'vertical',
        },
        {
          color: cssBc.color && colorMapper[cssBc.color],
          opacity: bc.opacity,
          fontSize: bc.fontSize,
          wordBreak: bc.wordBreak,
          textAlign: bc.textAlign,
        },
        cssBc.hoverColor && {
          '&:hover': {
            color: colorMapper[cssBc.hoverColor],
          },
        },
      ]}
    >
      {translatedTitle}
    </span>
  );

  if (bc.translate) {
    return <Observer>{() => renderText(pageStore.translate(title))}</Observer>;
  }

  return renderText(title);
}
