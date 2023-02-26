import type { ClassProps } from '@qctoken/register/lib/types';
import type { ProgressCircleNameType } from './types';
import { useStyles } from './ProgressCircle.styles';
import { useRunExecutor } from '@qctoken/executor';
import { mapComponents } from '@qctoken/register';

export function ProgressCircle(props: ClassProps<ProgressCircleNameType>) {
  const { bc, values, pageStore } = props;
  const progress = useRunExecutor(pageStore, bc.progress, values);
  const styles = useStyles(bc, progress);

  return (
    <div css={styles.root}>
      <div css={styles.content}>{mapComponents(bc.childs, props)}</div>
    </div>
  );
}
