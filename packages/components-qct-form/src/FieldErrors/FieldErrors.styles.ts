import { makeStyles } from '@qctoken/theme';
import type { FieldErrorsBuilderConfig } from './types';

export const useStyles = makeStyles((theme, bc: FieldErrorsBuilderConfig) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.selectColor(bc.color),
  },
  error: {
    ...theme.typography.nowrap,
    height: 24,
    lineHeight: '24px',
  },
}));
