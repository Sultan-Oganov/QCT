import type { ClassProps } from '@qctoken/register/lib/types';
import type { RoadMapLabelCardNameType } from './types';
import { useTheme } from '@qctoken/theme';
import { mapComponentOne } from '@qctoken/register';
import { css } from '@emotion/react';

export function RoadMapLabelCard(props: ClassProps<RoadMapLabelCardNameType>) {
  const { bc } = props;
  const theme = useTheme();

  return (
    <div
      css={[
        {
          boxSizing: 'border-box',
          flex: '0 0 175px',
          margin: theme.spacing(0, 3.75),
          alignSelf: 'flex-end',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 0,
        },
      ]}
    >
      <h3
        css={[
          {
            padding: 0,
            margin: theme.spacing(0, 0, 2.5, 0),
            fontWeight: 500,
            fontSize: 24,
            textAlign: 'center',
            letterSpacing: '0.003em',
            color: theme.colors.text.main,
          },
        ]}
      >
        {bc.title}
      </h3>
      <div
        css={css`
          margin: 0;
          height: 90%;
          display: flex;
          align-items: center;
          position: relative;
          &::after {
            z-index: -1;
            position: absolute;
            content: '';
            width: 2px;
            height: 90%;
            background: ${theme.colors.text.main};
            opacity: 0.15;
            left: 50%;
          }
        `}
      >
        {bc.child && mapComponentOne(bc.child, props)}
      </div>
    </div>
  );
}
