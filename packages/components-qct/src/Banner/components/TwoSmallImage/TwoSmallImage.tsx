import { ClassProps, mapComponentOne } from '@qctoken/register';
import type { BannerNameType } from '../../types';
import { useStyles } from './TwoSmallImage.styles';

export function TwoSmallImage(props: ClassProps<BannerNameType>) {
  const { bc } = props;
  const styles = useStyles(bc);

  return (
    <div css={styles.root}>
      <div css={styles.firstImage}></div>
      <div css={styles.content}>
        <div css={styles.textContent}>
          <div css={styles.title}>{bc.title}</div>
          <div css={styles.description}>{bc.description}</div>
        </div>
        {bc.logo && mapComponentOne(bc.logo, props)}
        {bc.button && mapComponentOne(bc.button, props)}
      </div>
      <div css={styles.secondImage}></div>
    </div>
  );
}
