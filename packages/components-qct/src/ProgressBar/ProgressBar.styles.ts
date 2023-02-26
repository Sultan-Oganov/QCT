import { Colors, makeStyles } from '@qctoken/theme';
import type { ProgressBarBuilderConfig } from './types';

type CssBc = {
  activeLineColor: keyof Colors;
  lineColor: keyof Colors;
};

export const useStyles = makeStyles(
  (theme, bc: ProgressBarBuilderConfig, cssBc: CssBc, progress: number) => ({
    main: {
      width: bc.width,
      position: 'relative',
      overflow: 'hidden',
    },
    block: {
      width: '100%',
      position: 'relative',
    },
    root: {
      width: '100%',
      height: bc.height,
      boxSizing: 'border-box',
      backgroundColor: theme.selectColor(cssBc.lineColor),
      overflow: 'hidden',
      borderRadius: 8,
    },
    top: {
      width: '100%',
    },
    childs: {
      margin: theme.spacing(1, 0, 0, 0),
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    bottom: {
      width: '100%',
    },
    line: {
      width: `${progress}%`,
      height: '100%',
      backgroundColor: theme.selectColor(cssBc.activeLineColor),
      borderRadius: 8,
    },
    progress: {
      ...theme.typography.micro,
      fontSize: bc.fontSize,
      color: theme.selectColor(cssBc.activeLineColor),
      display: 'flex',
      width: `${progress}%`,
      justifyContent: 'flex-end',
    },
    progressInStart: {
      width: 'auto',
      position: 'absolute',
      top: -15,
      left: 0,
    },
    numCI: {
      color: theme.colors.common.nonActive,
      marginBottom: theme.spacing(1),
    },
  }),
);
