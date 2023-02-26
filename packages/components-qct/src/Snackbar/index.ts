import { setComponent } from '@qctoken/register';
import { Snackbar } from './Snackbar';
import { SnackbarName } from './types';
import config from './config.json';

setComponent(SnackbarName, Snackbar, config);
