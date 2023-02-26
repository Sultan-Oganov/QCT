import { makeStyles, type Theme } from '@qctoken/theme';

export const useStyles = makeStyles((theme: Theme, bc) => ({
  root: {
    borderBottom: `1px solid ${theme.colors.common.stroke}`,
    textAlign: 'left',
    padding: bc.padding,
  },
  rootSelected: {
    background: theme.colors.common.stroke,
  },
  components: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    width: bc.width || '100%',
    borderRadius: bc.borderRadius,
    backgroundColor: theme.selectColor(bc.backgroundColor),
    justifyContent: bc.align,
  },
}));
