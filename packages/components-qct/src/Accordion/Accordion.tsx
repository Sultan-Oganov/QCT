import { ClassProps, mapComponents } from '@qctoken/register';
import type { AccordionNameType } from './types';
import { useStyles } from './Accordion.styles';
import { ArrowDownIcon } from './icons/ArrowDownIcon';
import { useState } from 'react';
import { runOperator } from '@qctoken/executor';

export function Accordion(props: ClassProps<AccordionNameType>) {
  const { bc, values, pageStore } = props;
  const [isOpen, setIsOpen] = useState(() =>
    typeof bc.isOpenDefault === 'boolean'
      ? bc.isOpenDefault
      : Boolean(runOperator({ values, pageStore }, bc.isOpenDefault)),
  );
  const styles = useStyles();
  const handleToggleIsOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div css={styles.root}>
      <div css={styles.header} onClick={handleToggleIsOpen}>
        {mapComponents(bc.headers, props)}
        <div css={styles.grow}></div>
        <button css={styles.arrowButton}>
          <ArrowDownIcon css={[styles.arrow, isOpen && styles.arrowOpen]} />
        </button>
      </div>
      {isOpen && mapComponents(bc.childs, props)}
    </div>
  );
}
