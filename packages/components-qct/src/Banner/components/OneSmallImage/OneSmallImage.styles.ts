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
    flex: '0 1 34%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: BANNER_ALIGN_CONTENT[bc.textAlign],
    gap: theme.spacing(2),
  },
  title: {
    ...theme.typography.h3,
    textAlign: bc.textAlign,
    color: theme.colors.primary.light,
  },
  description: {
    ...theme.typography.sub,
    textAlign: bc.textAlign,
    color:
      bc.imageType === 'full' || bc.backgroundColor === 'common.black'
        ? theme.colors.common.nonActive
        : theme.colors.common.black,
  },
  button: {
    flex: '0 1 32%',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    flex: '0 1 18%',
    borderRadius: 16,
    background: `${theme.selectColor(bc.backgroundColor)} url(${
      bc.mainBackgroundImage
    }) 0 0 / cover no-repeat`,
  },
}));
