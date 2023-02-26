import type { ClassProps } from '@qctoken/register/lib/types';
import type { RoadMapLineNameType } from './types';
import { useTheme } from '@qctoken/theme';

export function RoadMapLine({ bc }: ClassProps<RoadMapLineNameType>) {
  const theme = useTheme();
  return (
    <div
      css={[
        {
          width: bc.width,
          height: 2,
          borderTop: `1px dashed ${theme.colors.disabled.text}`,
          padding: theme.spacing(0, 5),
          margin: theme.spacing(0, 5),
          boxSizing: 'border-box',
          flexShrink: 0,
        },
      ]}
    ></div>
  );
}
