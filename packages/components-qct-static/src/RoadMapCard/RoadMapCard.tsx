import type { ClassProps } from '@qctoken/register/lib/types';
import type { RoadMapCardNameType } from './types';
import { useTheme } from '@qctoken/theme';
import { mapComponentOne } from '@qctoken/register';

export function RoadMapCard(props: ClassProps<RoadMapCardNameType>) {
  const { bc } = props;
  const theme = useTheme();

  return (
    <div
      css={[
        {
          boxSizing: 'border-box',
          flex: '0 0 175px',
          height: '90%',
          margin: theme.spacing(0, 3.75),
          alignSelf: 'flex-end',
        },
      ]}
    >
      <div
        css={[
          {
            margin: theme.spacing(0, 0, 5, 0),
          },
        ]}
      >
        {bc.child && mapComponentOne(bc.child, props)}
      </div>
      <h3
        css={[
          {
            margin: theme.spacing(0),
            fontWeight: 500,
            fontSize: 20,
            letterSpacing: '0.003em',
            color: theme.colors.text.main,
            opacity: 0.8,
          },
        ]}
      >
        {bc.title}
      </h3>
      <p
        css={[
          {
            fontSize: 16,
            letterSpacing: '0.003em',
            color: theme.colors.text.main,
            opacity: 0.6,
          },
        ]}
      >
        {bc?.description}
      </p>
    </div>
  );
}
