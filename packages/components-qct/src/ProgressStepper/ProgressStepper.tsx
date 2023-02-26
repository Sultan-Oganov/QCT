import { useRunExecutor } from '@qctoken/executor';
import type { ClassProps } from '@qctoken/register';
import { useThemeColorsPlain } from '@qctoken/theme';
import { useStyles } from './ProgressStepper.styles';
import type { ProgressStepperNameType } from './types';

export function ProgressStepper({
  bc,
  values,
  pageStore,
}: ClassProps<ProgressStepperNameType>) {
  const styles = useStyles();
  const colors = useThemeColorsPlain();
  const progress: number = useRunExecutor(pageStore, bc.progress, values);

  return (
    <div css={styles.root}>
      {bc.steps?.map((stepName, idx) => (
        <div key={idx} css={[styles.step, { opacity: 1 - 0.2 * idx }]}>
          <div
            css={[
              styles.stepLine,
              idx < progress && { backgroundColor: colors[bc.activeColor] },
            ]}
          />
          <div
            css={[
              styles.stepName,
              idx < progress && { color: colors[bc.activeColor] },
            ]}
          >
            {stepName}
          </div>
        </div>
      ))}
    </div>
  );
}
