import type { ClassProps } from '@qctoken/register/lib/types';
import type { AvatarNameType } from './types';
import { useTheme } from '@qctoken/theme';
import { useRunExecutor } from '@qctoken/executor';

export function Avatar({ bc, pageStore, values }: ClassProps<AvatarNameType>) {
  const theme = useTheme();
  const src = useRunExecutor(pageStore, bc.src, values);
  const executiveName = useRunExecutor(pageStore, bc.name, values);
  const shortName =
    typeof executiveName === 'string'
      ? executiveName
          .split(' ')
          .map((words: string) => words[0])
          .slice(0, 2)
          .join('')
      : '';

  return (
    <div
      css={[
        {
          width: bc.size,
          height: bc.size,
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
        },
      ]}
    >
      {src ? (
        <img
          css={[
            {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            },
          ]}
          src={src}
          alt={bc.name || 'Avatar'}
        />
      ) : (
        <div
          css={[
            {
              ...theme.typography.badge,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'uppercase',
              width: '100%',
              height: '100%',
              backgroundColor: theme.colors.common.white,
            },
          ]}
        >
          {shortName}
        </div>
      )}
    </div>
  );
}
