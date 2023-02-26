import { lazy } from 'react';
import { setComponent } from '@qctoken/register';
import { MarkdownSimpleName } from './types';
import config from './config.json';

const MarkdownSimple = lazy(() => import('./MarkdownSimple'));

setComponent(MarkdownSimpleName, MarkdownSimple, config);
