import { useTheme } from '@qctoken/theme';
import DeleteIcon from '../../assets/svg/DeleteIcon';
import type { PageObjectWithAttrs } from '../../types';
import { Title } from '../Title/Title';

type Props = {
  pageObject: PageObjectWithAttrs;
  onDeletePageObject: (id: number) => void;
};
export function Header({ pageObject, onDeletePageObject }: Props) {
  const theme = useTheme();
  const title = pageObject.objectName;

  return (
    <>
      <header
        css={{
          boxSizing: 'border-box',
          borderBottom: `1px solid ${theme.colors.common.stroke}`,
          padding: theme.spacing(4),
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Title title="Selected" />
        <div
          css={{
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            gap: theme.spacing(1),
          }}
        >
          <span
            css={{
              display: 'inline-block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            title={title}
          >
            {title}
          </span>
          <span>({pageObject.id})</span>
          <DeleteIcon
            css={{
              cursor: 'pointer',
              flexShrink: 0,
            }}
            onClick={() => onDeletePageObject(pageObject.id)}
          />
        </div>
      </header>
    </>
  );
}
