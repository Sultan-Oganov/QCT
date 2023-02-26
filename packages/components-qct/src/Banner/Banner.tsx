import { ClassProps } from '@qctoken/register';
import type { BannerNameType } from './types';
import { useStyles } from './Banner.styles';
import { FullImage } from './components/FullImage/FullImage';
import { OneMediumImage } from './components/OneMediumImage/OneMediumImage';
import { TwoSmallImage } from './components/TwoSmallImage/TwoSmallImage';
import { OneSmallImage } from './components/OneSmallImage/OneSmallImage';

const RENDER_TAB_MAP = {
  full: FullImage,
  right: OneMediumImage,
  left: OneMediumImage,
  twoSmall: TwoSmallImage,
  oneSmall: OneSmallImage,
};

export function Banner(props: ClassProps<BannerNameType>) {
  const { bc } = props;
  const styles = useStyles(bc);
  const BannerComponent = RENDER_TAB_MAP[bc.imageType];
  return (
    <div css={styles.banner}>
      <div css={styles.content}>{<BannerComponent {...props} />}</div>
      {bc.price && <div css={styles.price}>{bc.price} QCT</div>}
    </div>
  );
}
