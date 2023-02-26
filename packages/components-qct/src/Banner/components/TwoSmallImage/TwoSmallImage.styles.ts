import { makeStyles } from '@qctoken/theme';
import type { BannerBuilderConfig } from '../../types';

export const useStyles = makeStyles((theme, bc: BannerBuilderConfig) => ({
  root: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
  },
  firstImage: {
    flex: '0 1 190px',
    background: `${theme.selectColor(bc.backgroundColor)} url(${
      bc.mainBackgroundImage
    }) 0 0 / cover no-repeat`,
    borderRadius: 16,
  },
  content: {
    maxWidth: 348,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondImage: {
    flex: '0 1 190px',
    background: `${theme.selectColor(bc.backgroundColor)} url(${
      bc.secondBackgroundImage
    }) 0 0 / cover no-repeat`,
    borderRadius: 16,
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  title: {
    ...theme.typography.mega,
    textAlign: 'center',
  },
  description: {
    ...theme.typography.regular,
    textAlign: 'center',
  },
}));
