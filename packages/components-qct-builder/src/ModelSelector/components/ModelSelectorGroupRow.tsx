import { useState } from 'react';
import { useTheme } from '@emotion/react';
import type { ClassProps } from '@qctoken/register';
import ArrowDownIcon from '../assets/svg/ArrowDownIcon';
import ArrowIcon from '../assets/svg/ArrowIcon';
import type { ModelSelectorModel } from '../ModelSelectorModel';
import type { ModelSelectorNameType } from '../types';
import { ModelSelectorRow } from './ModelSelectorRow';
import { useStyles } from './ModelSelectorGroupRow.styles';

interface Props extends ClassProps<ModelSelectorNameType> {
  name: string;
  store: ModelSelectorModel;
  records: Record<string, unknown>[];
  indent: number;
}

export function ModelSelectorGroupRow({ name, indent, ...props }: Props) {
  const theme = useTheme();
  const styles = useStyles();
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleIsOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div
        css={[
          styles.groupRoot,
          {
            padding: theme.spacing(2, 4, 2, 4 + indent * 2),
          },
        ]}
      >
        <div css={styles.groupIcon} onClick={handleToggleIsOpen}>
          {isOpen ? <ArrowIcon /> : <ArrowDownIcon />}
        </div>
        <div css={styles.groupName}>{name}</div>
      </div>
      {isOpen && <ModelSelectorRow indent={indent + 1} {...props} />}
    </>
  );
}
