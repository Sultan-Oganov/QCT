import type { ClassProps } from '@qctoken/register/lib/types';
import type { ProgressBarNameType } from './types';
import { useRunExecutor } from '@qctoken/executor';
import { useStyles } from './ProgressBar.styles';
import { useAdaptiveAttribute } from '@qctoken/theme';
import { mapComponents } from '@qctoken/register';

export function ProgressBar(props: ClassProps<ProgressBarNameType>) {
  const { bc, pageStore, values } = props;
  const progress = useRunExecutor(pageStore, bc.progress, values) ?? 0;
  const cssBc = useAdaptiveAttribute(bc, pageStore, [
    'activeLineColor',
    'lineColor',
  ]);
  const styles = useStyles(bc, cssBc, progress);
  const computedNumber = useRunExecutor(pageStore, bc.numberToCI, values);

  return (
    <div css={styles.main}>
      {bc.progressTopChilds && (
        <div css={styles.top}>{mapComponents(bc.progressTopChilds, props)}</div>
      )}

      <div css={styles.block}>
        <span css={[styles.progress, progress < 15 && styles.progressInStart]}>
          {computedNumber && (
            <span css={styles.numCI} title={computedNumber}>
              {computedNumber} - &nbsp;
            </span>
          )}
          {progress}%
        </span>
        <div css={styles.root}>
          <div css={styles.line}></div>
        </div>
        <div css={styles.childs}>
          {bc.startChilds && mapComponents(bc.startChilds, props)}
          {bc.endChilds && mapComponents(bc.endChilds, props)}
        </div>
      </div>
      {bc.progressBottomChilds && (
        <div css={styles.bottom}>
          {mapComponents(bc.progressBottomChilds, props)}
        </div>
      )}
    </div>
  );
}
