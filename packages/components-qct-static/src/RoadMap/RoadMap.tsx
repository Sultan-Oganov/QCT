import type { ClassProps } from '@qctoken/register/lib/types';
import type { RoadMapNameType } from './types';
import { useTheme } from '@qctoken/theme';
import { mapComponents } from '@qctoken/register';

export function RoadMap(props: ClassProps<RoadMapNameType>) {
  const { bc } = props;
  const theme = useTheme();
  return (
    <div
      css={[
        {
          width: '100%',
          margin: 'auto',
        },
      ]}
    >
      <div
        css={[
          {
            margin: theme.spacing(20, 0),
          },
        ]}
      >
        <h2
          css={[
            {
              fontSize: 36,
              color: theme.colors.primary.main,
              margin: 0,
            },
          ]}
        >
          {bc.title}
        </h2>
        <h3
          css={[
            {
              fontSize: 36,
              margin: 0,
            },
          ]}
        >
          {bc.subtitle}
        </h3>
      </div>

      <div
        css={{
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            height: 300,
          }}
        >
          {mapComponents(bc.child, props)}
        </div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            color: theme.colors.disabled.text,
          }}
        >
          {mapComponents(bc.timelinechilds, props)}
        </div>
      </div>
    </div>
  );
}
