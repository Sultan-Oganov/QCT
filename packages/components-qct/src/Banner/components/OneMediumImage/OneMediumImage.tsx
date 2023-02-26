import { ClassProps, mapComponentOne } from '@qctoken/register';
import type { BannerNameType } from '../../types';
import { useStyles } from './OneMediumImage.styles';

export function OneMediumImage(props: ClassProps<BannerNameType>) {
  const { bc } = props;
  const styles = useStyles(bc);

  return (
    <div css={styles.root}>
      <div css={styles.content}>
        <div css={styles.textContent}>
          <div css={styles.title} title={bc.title}>
            {bc.title}
          </div>
          <div css={styles.description} title={bc.description}>
            {bc.description}
          </div>
        </div>
        {bc.logo && (
          <div css={styles.logo}>{mapComponentOne(bc.logo, props)}</div>
        )}
        {bc.button && (
          <div css={styles.button}>{mapComponentOne(bc.button, props)}</div>
        )}
      </div>
      <div css={styles.image}></div>
    </div>
  );
}
