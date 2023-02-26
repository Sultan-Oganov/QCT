import { type ClassProps, mapComponents } from '@qctoken/register';
import type { ColumnNameType } from './types';
import { useStyles } from './Column.styles';
import { useTable } from '../store/hooks/useTable';
import { observer } from '@qctoken/store';

export const Column = observer(function Column(
  props: ClassProps<ColumnNameType>,
) {
  const { bc, values } = props;
  const styles = useStyles(bc);
  const store = useTable();
  const { isSelected } = store;

  if (!values) {
    return null;
  }

  if (bc.childs.length > 0) {
    return (
      <td css={[styles.root, isSelected(values.id) && styles.rootSelected]}>
        <div css={styles.components}>{mapComponents(bc.childs, props)}</div>
      </td>
    );
  }

  if (bc.name) {
    return (
      <td css={[styles.root, isSelected(values.id) && styles.rootSelected]}>
        {String(values[bc.name])}
      </td>
    );
  }

  return null;
});
