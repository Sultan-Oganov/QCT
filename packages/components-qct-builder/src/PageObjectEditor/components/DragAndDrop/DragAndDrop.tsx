import { Title } from '../Title/Title';
import { useTheme } from '@qctoken/theme';
import DragAndDIcon from '../../assets/svg/DragAndDIcon';
import { InputProps } from '../types';

export function DragAndDrop(props: InputProps) {
  const { attr } = props;
  const theme = useTheme();

  return (
    <div
      css={{
        boxSizing: 'border-box',
        borderBottom: `1px solid ${theme.colors.common.stroke}`,
        padding: theme.spacing(4),
      }}
    >
      <Title title={attr.name} />

      <input
        css={{
          display: 'none',
        }}
        id={`${attr.id}`}
        type="file"
      />

      <label
        htmlFor={`${attr.id}`}
        css={{
          display: 'block',
          borderRadius: 6,
          border: `2px dashed ${theme.colors.common.stroke}`,
          margin: theme.spacing(4, 0, 0, 4),
          padding: theme.spacing(5),
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        <DragAndDIcon />
        <p
          css={{
            color: theme.colors.text.disabled,
            fontSize: 14,
            letterSpacing: '0.003em',
          }}
        >
          Перетащите документ
        </p>
      </label>
    </div>
  );
}
