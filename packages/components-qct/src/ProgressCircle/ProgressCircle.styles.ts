import { makeStyles } from '@qctoken/theme';
import type { ProgressCircleBuilderConfig } from './types';

export const useStyles = makeStyles(
  (
    theme,
    {
      width = '28px',
      height = '28px',
      thickness,
      color,
    }: ProgressCircleBuilderConfig,
    progress: number = 0,
  ) => ({
    root: {
      display: 'flex',
      flexShrink: 0,
      width,
      height,
      borderRadius: '50%',
      background: `conic-gradient(${theme.selectColor(color)} ${progress}%, ${
        theme.colors.common.stroke
      } 0deg)`,
      fontSize: 0,
      animation: '.4s ease-out turn_in reverse',
      transform: 'rotate(180deg)',
    },
    content: {
      width: `calc(100% - ${thickness * 2}px)`,
      height: `calc(100% - ${thickness * 2}px)`,
      borderRadius: '50%',
      margin: thickness,
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.common.card,
      transform: 'rotate(-180deg)',
    },
  }),
);
