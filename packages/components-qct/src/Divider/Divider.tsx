import type { ClassProps } from '@qctoken/register/lib/types';
import { useThemeColorsPlain } from '@qctoken/theme';
import type { DividerNameType } from './types';

export function Divider({ bc }: ClassProps<DividerNameType>) {
  const { color = 'common.stroke' } = bc;
  const colors = useThemeColorsPlain();

  return (
    <div
      css={[
        {
          height: bc.fullLength ? '100%' : 'auto',
          backgroundColor: colors[color],
          margin: 0,
          border: 'none',
        },
        bc.orientation === 'horizontal' && {
          height: bc.size,
          width: bc.fullLength ? '100%' : 'auto',
        },
        bc.orientation === 'vertical' && {
          width: bc.size,
          height: bc.fullLength ? '100%' : 'auto',
        },
      ]}
    />
  );
}
