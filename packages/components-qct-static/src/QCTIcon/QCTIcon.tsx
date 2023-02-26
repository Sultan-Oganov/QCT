import { type ClassProps } from '@qctoken/register';
import {
  useAdaptiveAttribute,
  useTheme,
  useThemeColorsPlain,
} from '@qctoken/theme';
import { QCTIconNameType } from './types';
import { icons } from './icons';

export function QCTIcon({
  pageStore,
  bc,
  disabled,
}: ClassProps<QCTIconNameType>) {
  const colors = useThemeColorsPlain();
  const theme = useTheme();
  const cssBc = useAdaptiveAttribute(bc, pageStore, ['color']);
  const Icon = bc.name && icons[bc.name];

  if (!Icon) {
    return null;
  }

  return (
    <Icon
      css={[
        {
          color: cssBc.color && colors[cssBc.color],
          width: bc.width,
          flexShrink: 0,
        },
        disabled && {
          color: theme.colors.disabled.text,
        },
      ]}
    />
  );
}
