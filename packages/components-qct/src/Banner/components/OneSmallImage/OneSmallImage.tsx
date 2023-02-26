import { ClassProps, mapComponentOne } from '@qctoken/register';
import type { BannerNameType } from '../../types';
import { useStyles } from './OneSmallImage.styles';

export function OneSmallImage(props: ClassProps<BannerNameType>) {
  const { bc } = props;
  const styles = useStyles(bc);

  return (
    <div css={styles.root}>
      <div css={styles.content}>
        <div css={styles.title} title={bc.title}>
          {bc.title}
        </div>
        {bc.logo && mapComponentOne(bc.logo, props)}
        <div css={styles.description} title={bc.description}>
          {bc.description}
        </div>
      </div>
      <div css={styles.image}></div>
      {bc.button && (
        <div css={styles.button}>{mapComponentOne(bc.button, props)}</div>
      )}
    </div>
  );
}
