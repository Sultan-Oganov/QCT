import { ClassProps, mapComponentOne } from '@qctoken/register';
import type { QCTNotFoundCourseCardNameType } from './types';
import { useStyles } from './QCTNotFoundCourseCard.styles';
import vrImage from './assets/images/vr.png';

export function QCTNotFoundCourseCard(
  props: ClassProps<QCTNotFoundCourseCardNameType>,
) {
  const { bc } = props;
  const styles = useStyles();

  return (
    <div css={styles.root}>
      <img css={styles.vrImg} src={vrImage} alt="" />
      <div css={styles.description}>
        Пока что вы еще не приобрели ни одного курса :(
      </div>
      <div css={styles.footer}>
        {bc.button && mapComponentOne(bc.button, props)}
      </div>
    </div>
  );
}
