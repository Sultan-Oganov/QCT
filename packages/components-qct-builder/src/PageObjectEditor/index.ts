import { lazy } from 'react';

import { setComponent } from '@qctoken/register';
import { PageObjectEditorName } from './types';
import config from './config.json';
const PageObjectEditor = lazy(() => import('./PageObjectEditor'));

setComponent(PageObjectEditorName, PageObjectEditor, config);
