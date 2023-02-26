import { ClassProps, mapComponentOne } from '@qctoken/register';
import type { BannerNameType } from '../../types';
import { useStyles } from './FullImage.styles';

export function FullImage(props: ClassProps<BannerNameType>) {
  const { bc } = props;
  const styles = useStyles(bc);

  return (
    <div css={styles.root}>
      <div css={styles.title}>{bc.title}</div>
      <div css={styles.description}>{bc.description}</div>
      {bc.logo && mapComponentOne(bc.logo, props)}
      {bc.button && mapComponentOne(bc.button, props)}
    </div>
  );
}
