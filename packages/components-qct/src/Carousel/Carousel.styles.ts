import { makeStyles } from '@qctoken/theme';
import type { CarouselBuilderConfig } from './types';
export const useStyles = makeStyles((theme, bc: CarouselBuilderConfig) => ({
  root: {
    width: bc.width,
    height: bc.height,
    '& .swiper-slide': {
      width: bc.slideWidth || 'auto',
    },
    '& .swiper-button-next, & .swiper-button-prev': {
      color: theme.colors.text.main,
      width: 32,
      height: 32,
      borderRadius: '50%',
      backgroundColor: theme.colors.common.white,
      border: `1px solid ${theme.colors.common.stroke}`,
    },
    '& .swiper-button-next::after, & .swiper-button-prev::after': {
      fontSize: 16,
    },
  },
}));
