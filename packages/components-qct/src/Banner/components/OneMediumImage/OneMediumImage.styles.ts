import { makeStyles } from '@qctoken/theme';
import type { BannerBuilderConfig } from '../../types';

export const BANNER_ALIGN_CONTENT = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

export const useStyles = makeStyles((theme, bc: BannerBuilderConfig) => ({
  root: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    order: bc.imageType === 'right' ? 1 : 2,
    flex: '0 1 45%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:
      bc.imageType === 'left' && !bc.logo && !bc.button
        ? 'flex-end'
        : 'space-between',
    alignItems: BANNER_ALIGN_CONTENT[bc.textAlign],
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    order: bc.imageType === 'left' ? 2 : 3,
  },
  title: {
    ...theme.typography.mega,
    textAlign: bc.textAlign,
    order: bc.imageType === 'left' ? 2 : 1,
  },
  description: {
    ...theme.typography.regular,
    textAlign: bc.textAlign,
    order: bc.imageType === 'left' ? 1 : 2,
  },
  logo: {
    order: bc.imageType === 'left' ? 1 : 3,
  },
  button: {
    order: 4,
  },
  image: {
    order: bc.imageType === 'right' ? 2 : 1,
    flex: '0 1 52%',
    borderRadius: 16,
    background: `${theme.selectColor(bc.backgroundColor)} url(${
      bc.mainBackgroundImage
    }) 0 0 / cover no-repeat`,
  },
}));
