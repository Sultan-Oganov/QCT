import type { ClassProps } from '@qctoken/register/lib/types';
import type { BadgeNameType } from './types';

export function Badge({ bc }: ClassProps<BadgeNameType>) {
  return (
    <div
      css={[
        {
          borderRadius: '10px',
          overflow: 'hidden',
          display: 'inline-block',
        },
      ]}
    >
      {bc.title}
    </div>
  );
}
