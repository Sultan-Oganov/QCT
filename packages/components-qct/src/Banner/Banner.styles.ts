import { makeStyles } from '@qctoken/theme';
import type { BannerBuilderConfig } from './types';

const PRICE_POSITION: Record<string, any> = {
  left: { left: 24 },
  right: { right: 24 },
};

export const useStyles = makeStyles((theme, bc: BannerBuilderConfig) => {
  const color =
    bc.backgroundColor === 'common.black'
      ? theme.colors.common.white
      : theme.colors.common.black;

  const bg = () => {
    if (bc.gradient) {
      return {
        background: `${theme.colors.primary.light} linear-gradient(276.46deg, #6AA2FF -10.16%, #E4E7FB 89.47%)`,
      };
    }

    if (bc.imageType === 'full') {
      return {
        background: `${theme.selectColor(bc.backgroundColor)} url(${
          bc.mainBackgroundImage
        }) 0 0 / cover no-repeat`,
      };
    }

    return { background: theme.selectColor(bc.backgroundColor) };
  };

  return {
    banner: {
      boxSizing: 'border-box',
      borderRadius: 16,
      padding: theme.spacing(6),
      width: bc.width,
      height: bc.height,
      color: color,
      position: 'relative',
      ...bg(),
    },
    content: {
      width: '100%',
      height: '100%',
    },
    price: {
      position: 'absolute',
      top: 24,
      ...(PRICE_POSITION[bc.imageType] || { right: 24 }),
      padding: theme.spacing(0.5, 2),
      backgroundColor: theme.colors.primary.main,
      borderRadius: 10,
      color: theme.colors.common.white,
    },
  };
});
