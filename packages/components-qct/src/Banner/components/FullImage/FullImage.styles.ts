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
    flexDirection: 'column',
    alignItems: BANNER_ALIGN_CONTENT[bc.textAlign],
    justifyContent: 'space-between',
  },
  title: {
    ...theme.typography.mega,
    textAlign: bc.textAlign,
  },
  description: {
    ...theme.typography.regular,
    textAlign: bc.textAlign,
  },
}));
