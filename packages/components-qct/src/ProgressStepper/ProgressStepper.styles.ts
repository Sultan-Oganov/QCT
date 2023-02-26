import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    width: '100%',
  },
  step: {
    flex: 1,
  },
  stepLine: {
    height: 8,
    width: '100%',
    backgroundColor: theme.colors.common.nonActive,
  },
  stepName: {
    margin: theme.spacing(3, 0, 0, 0),
    color: theme.colors.common.nonActive,
  },
  activeStep: {},
}));
