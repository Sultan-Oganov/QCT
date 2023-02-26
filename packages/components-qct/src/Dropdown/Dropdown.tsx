import { useState } from 'react';
import { ClassProps, mapComponentOne, mapComponents } from '@qctoken/register';
import { useAdaptiveAttribute } from '@qctoken/theme';
import type { DropdownNameType } from './types';
import { useStyles } from './Dropdown.styles';

export function Dropdown(props: ClassProps<DropdownNameType>) {
  const { bc, pageStore } = props;
  const [open, setOpen] = useState(false);
  const styles = useStyles(bc);
  const cssBc = useAdaptiveAttribute(bc, pageStore, ['margin']);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      css={[
        styles.dropdown,
        open && bc.childs && styles.dropdownActive,
        { margin: cssBc.margin },
      ]}
    >
      <div css={styles.labelBox}>
        <span css={styles.label}>
          {bc.label
            ? mapComponentOne(bc.label, props)
            : pageStore.translate('Title')}
        </span>
        <span
          onClick={handleOpen}
          css={[styles.btnIcon, open && styles.btnIconActive]}
        >
          {bc.icon && mapComponentOne(bc.icon, props)}
        </span>
      </div>
      {open && bc.childs ? (
        <div css={styles.menu}>{mapComponents(bc.childs, props)}</div>
      ) : null}
    </div>
  );
}
